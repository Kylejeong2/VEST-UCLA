import FormData from 'form-data';
import fetch from 'node-fetch';

async function pollTaskStatus(taskId: string): Promise<any> {
  console.log(`[Chunkr] Starting to poll task: ${taskId}`);
  let attempts = 0;
  while (true) {
    attempts++;
    console.log(`[Chunkr] Polling attempt ${attempts} for task: ${taskId}`);
    
    try {
      const response = await fetch(`https://api.chunkr.ai/api/v1/task/${taskId}`, {
        headers: {
          'Authorization': process.env.CHUNKR_API_KEY!
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[Chunkr] Poll error response (${response.status}):`, errorText);
        throw new Error(`Failed to poll task: ${errorText}`);
      }

      const data = await response.json();
      console.log(`[Chunkr] Task status: ${data.status}`);
      
      if (data.status === 'Succeeded') {
        console.log(`[Chunkr] Task completed successfully after ${attempts} attempts`);
        return data;
      } else if (data.status === 'Failed' || data.status === 'Cancelled') {
        console.error(`[Chunkr] Task failed with status: ${data.status}`, data);
        throw new Error(`Task failed with status: ${data.status}`);
      }
    } catch (error) {
      console.error(`[Chunkr] Error polling task:`, error);
      throw error;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

export async function parseResumeFromDrive(fileId: string): Promise<{ rawText: string, parsedData: any }> {
  const driveUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const jsonSchema = '{' +
    '"title":"Resume",' +
    '"type":"object",' +
    '"properties":[' +
      '{' +
        '"name":"work_experience",' +
        '"title":"Work Experience",' +
        '"type":"string",' +
        '"description":"Professional experience including company names, titles, dates, and responsibilities",' +
        '"default":null' +
      '},' +
      '{' +
        '"name":"skills",' +
        '"title":"Skills",' +
        '"type":"string",' +
        '"description":"Technical skills, tools, programming languages, and other relevant abilities",' +
        '"default":null' +
      '},' +
      '{' +
        '"name":"projects",' +
        '"title":"Projects",' +
        '"type":"string",' +
        '"description":"Notable projects, including descriptions and technologies used",' +
        '"default":null' +
      '},' +
      '{' +
        '"name":"achievements",' +
        '"title":"Achievements",' +
        '"type":"string",' +
        '"description":"Awards, honors, certifications, and other notable accomplishments",' +
        '"default":null' +
      '}' +
    ']' +
  '};type=application/json';
  
  try {
    console.log(`[Resume Parser] Starting to parse resume from Drive ID: ${fileId}`);
    console.log(`[Resume Parser] Drive URL: ${driveUrl}`);

    const form = new FormData();
    form.append('file_url', driveUrl);
    form.append('model', 'Fast');
    form.append('ocr_strategy', 'Auto');
    form.append('segmentation_strategy', 'LayoutAnalysis');
    form.append('target_chunk_length', '512');
    
    form.append('json_schema', jsonSchema);
    
    console.log('[Resume Parser] Request details:', {
      url: 'https://api.chunkr.ai/api/v1/task',
      headers: {
        'Authorization': 'Bearer <redacted>',
      },
      formData: {
        file_url: driveUrl,
        model: 'Fast',
        ocr_strategy: 'Auto',
        segmentation_strategy: 'LayoutAnalysis',
        target_chunk_length: '512',
        json_schema: jsonSchema
      }
    });

    const options = {
      method: 'POST',
      headers: {
        'Authorization': process.env.CHUNKR_API_KEY!,
      },
      body: form
    } as any;

    console.log('[Resume Parser] Sending request to Chunkr API');
    const response = await fetch('https://api.chunkr.ai/api/v1/task', options);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Resume Parser] Error response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });
      throw new Error(`Failed to create task: ${errorText}`);
    }
    
    const createTaskResponse = await response.json();
    console.log('[Resume Parser] Create task response:', createTaskResponse);
    
    console.log(`[Resume Parser] Successfully created Chunkr task: ${createTaskResponse.task_id}`);

    console.log('[Resume Parser] Waiting for Chunkr task completion');
    const taskResult = await pollTaskStatus(createTaskResponse.task_id);
    
    console.log('[Resume Parser] Task result:', taskResult);
    
    const result = {
      rawText: taskResult.output.segments.map((s: any) => s.content).join('\n'),
      parsedData: taskResult.extracted_json
    };
    
    console.log('[Resume Parser] Final results:', {
      textLength: result.rawText.length,
      parsedFields: Object.keys(result.parsedData || {}),
      rawText: result.rawText.substring(0, 200) + '...',
      parsedData: result.parsedData
    });
    
    return result;
  } catch (error) {
    console.error('[Resume Parser] Error parsing resume:', error);
    if (error instanceof Error) {
      console.error('[Resume Parser] Error details:', {
        message: error.message,
        stack: error.stack,
        sentData: {
          file_url: driveUrl,
          model: 'Fast',
          target_chunk_length: '512',
          ocr_strategy: 'Auto',
          segmentation_strategy: 'LayoutAnalysis',
          json_schema: jsonSchema
        }
      });
    }
    throw error;
  }
}