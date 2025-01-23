"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Loader2, Save, Trash2, FileText, Linkedin, Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "@/components/ui/upload-button";
import { toast } from "sonner";
import Image from "next/image";
import { Member } from "@/lib/types/hiring";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Video } from "@/lib/types/hiring";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [member, setMember] = useState<Member | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [debouncedMember] = useDebounce(member, 5000);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in?redirect_url=/admin/profile');
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (user?.id) {
      fetch(`/api/members/me`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error === "Member not found") {
            // Create a new member if one doesn't exist
            return fetch('/api/members/me', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.emailAddresses[0]?.emailAddress || '',
                headshot: user.imageUrl || '',
                description: '',
                projects: [],
                skills: [],
                applicationResponses: {},
                isAvailable: true,
              }),
            }).then(res => res.json());
          }
          return data;
        })
        .then((data) => setMember(data));
    }
  }, [user?.id, user?.firstName, user?.lastName, user?.emailAddresses, user?.imageUrl]);

  useEffect(() => {
    if (debouncedMember && !isSaving) {
      handleSave();
    }
  }, [debouncedMember]);

  const handleSave = async () => {
    if (!member) return;
    
    setIsSaving(true);
    try {
      await fetch('/api/members/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member),
      });
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (field: keyof Member, value: any) => {
    if (!member) return;
    setMember({ ...member, [field]: value });
  };

  const handleSkillAdd = (skill: string) => {
    if (!member) return;
    const currentSkills = member.skills || [];
    if (!currentSkills.includes(skill)) {
      setMember({ ...member, skills: [...currentSkills, skill] });
    }
  };

  const handleSkillRemove = (skill: string) => {
    if (!member) return;
    const currentSkills = member.skills || [];
    setMember({ ...member, skills: currentSkills.filter(s => s !== skill) });
  };

  const handleProjectChange = (index: number, field: string, value: any) => {
    if (!member) return;
    const currentProjects = member.projects || [];
    const newProjects = [...currentProjects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setMember({ ...member, projects: newProjects });
  };

  const handleVideoChange = (index: number, field: string, value: any) => {
    if (!member) return;
    const currentVideos = member.videos || [];
    const newVideos = [...currentVideos];
    newVideos[index] = { ...newVideos[index], [field]: value };
    setMember({ ...member, videos: newVideos });
  };

  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-white text-sm">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-white text-sm">Setting up your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-black text-white">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-white">Profile Management</h1>
          <p className="text-white">
            Update your member profile information
          </p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Picture & Basic Info */}
        <Card className="p-6 bg-zinc-900 border-zinc-800 lg:col-span-1">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-4 block text-white">Profile Picture</label>
              <div className="space-y-4">
                <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden bg-zinc-800">
                  {member.headshot ? (
                    <>
                      <Image
                        src={member.headshot}
                        alt="Profile headshot"
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => handleChange('headshot', '')}
                        className="absolute top-2 right-2 p-1 bg-red-500/80 rounded-full hover:bg-red-600/80 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white">
                      No image
                    </div>
                  )}
                </div>
                <UploadButton
                  onUploadComplete={(url) => {
                    handleChange('headshot', url);
                    toast.success('Image uploaded successfully');
                  }}
                  onUploadError={(error) => {
                    console.error('Upload error:', error);
                    toast.error('Failed to upload image');
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-white">First Name</label>
                <Input
                  value={member.firstName || ''}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-white">Last Name</label>
                <Input
                  value={member.lastName || ''}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-white">Email</label>
                <div className="relative">
                  <Input
                    value={member.email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-zinc-800 border-zinc-700 pl-10 text-white"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-white">Looking For</label>
                <Select
                  value={member.lookingFor || ''}
                  onValueChange={(value) => handleChange('lookingFor', value)}
                >
                  <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem className="text-white" value=" ">Select...</SelectItem>
                    <SelectItem className="text-white" value="Full-time">Full-time</SelectItem>
                    <SelectItem className="text-white" value="Summer Internship">Summer Internship</SelectItem>
                    <SelectItem className="text-white" value="Fall Internship">Fall Internship</SelectItem>
                    <SelectItem className="text-white" value="Winter Internship">Winter Internship</SelectItem>
                    <SelectItem className="text-white" value="Spring Internship">Spring Internship</SelectItem>
                    <SelectItem className="text-white" value="Co-founder Role">Co-founder Role</SelectItem>
                    <SelectItem className="text-white" value="Part-time">Part-time</SelectItem>
                    <SelectItem className="text-white" value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Column - Other Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-white">About Me</h2>
            <Textarea
              value={member.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              className="bg-zinc-800 border-zinc-700 min-h-[150px] text-white"
              placeholder="Write a brief description about yourself, your interests, and what you're looking for..."
            />
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Documents & Links</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-white">Resume</label>
                <div className="space-y-2">
                  {member.resumeUrl ? (
                    <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <a 
                          href={member.resumeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm hover:underline text-white"
                        >
                          View Resume
                        </a>
                      </div>
                      <button
                        onClick={() => handleChange('resumeUrl', '')}
                        className="p-1 hover:bg-red-500/20 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : null}
                  <UploadButton
                    endpoint="resumeUploader"
                    onUploadComplete={(url) => {
                      handleChange('resumeUrl', url);
                      toast.success('Resume uploaded successfully');
                    }}
                    onUploadError={(error) => {
                      console.error('Upload error:', error);
                      toast.error('Failed to upload resume');
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-white">LinkedIn Profile</label>
                <div className="relative">
                  <Input
                    value={member.linkedinUrl || ''}
                    onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                    className="bg-zinc-800 border-zinc-700 pl-10 text-white"
                    placeholder="https://linkedin.com/in/username"
                  />
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Technical Skills</h2>
              <div className="text-sm text-white">Press Enter to add</div>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Add a skill (e.g., Python, React, UI Design)"
                className="bg-zinc-800 border-zinc-700 text-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    handleSkillAdd(input.value);
                    input.value = '';
                  }
                }}
              />
              <div className="flex flex-wrap gap-2">
                {(member.skills || []).map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="cursor-pointer hover:bg-red-500/20 px-3 py-1 text-black"
                    onClick={() => handleSkillRemove(skill)}
                  >
                    {skill}
                    <span className="ml-2">×</span>
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Projects</h2>
              <Button
                onClick={() => handleChange('projects', [
                  ...(member.projects || []),
                  { title: '', description: '' }
                ])}
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800"
              >
                Add Project
              </Button>
            </div>
            <div className="space-y-6">
              {(member.projects || []).map((project, index) => (
                <div key={index} className="p-4 bg-zinc-800/50 rounded-lg space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-4">
                      <Input
                        value={project.title}
                        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                        placeholder="Project Title"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                      <Textarea
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        placeholder="Project Description"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <Input
                            value={project.demoUrl || ''}
                            onChange={(e) => handleProjectChange(index, 'demoUrl', e.target.value)}
                            placeholder="Demo URL"
                            className="bg-zinc-800 border-zinc-700 pl-10 text-white"
                          />
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        </div>
                        <div className="relative">
                          <Input
                            value={project.imageUrl || ''}
                            onChange={(e) => handleProjectChange(index, 'imageUrl', e.target.value)}
                            placeholder="Image URL"
                            className="bg-zinc-800 border-zinc-700 pl-10 text-white"
                          />
                          <Image
                            src="/image-icon.svg"
                            alt="Image"
                            width={16}
                            height={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-red-500/20 -mt-1 text-white"
                      onClick={() => {
                        const newProjects = [...member.projects];
                        newProjects.splice(index, 1);
                        handleChange('projects', newProjects);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Demo Videos</h2>
              <Button
                onClick={() => handleChange('videos', [
                  ...(member.videos || []),
                  { title: '', url: '', description: '' }
                ])}
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800"
              >
                Add Video
              </Button>
            </div>
            <div className="space-y-6">
              {(member.videos || []).map((video, index) => (
                <div key={index} className="p-4 bg-zinc-800/50 rounded-lg space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-4">
                      <Input
                        value={video.title}
                        onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                        placeholder="Video Title"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                      <Input
                        value={video.url}
                        onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                        placeholder="YouTube URL"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                      <Textarea
                        value={video.description}
                        onChange={(e) => handleVideoChange(index, 'description', e.target.value)}
                        placeholder="Short description of what you're demonstrating"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-red-500/20 -mt-1 text-white"
                      onClick={() => {
                        const newVideos = [...(member.videos || [])];
                        newVideos.splice(index, 1);
                        handleChange('videos', newVideos);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}