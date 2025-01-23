"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, FileText, ArrowLeft, Loader2 } from "lucide-react";
import { Member } from "@/lib/types/hiring";

export default function MemberPage({ params }: { params: { slug: string } }) {
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/members/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setMember(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching member:", error);
        setIsLoading(false);
      });
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-white text-sm">Loading member profile...</p>
        </div>
      </div>
    );
  }

  if (!member) return null;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/hire" 
          className="inline-flex items-center text-white hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all members
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-1">
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={member.headshot}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-2xl font-bold mb-2 text-white">
                {member.firstName} {member.lastName}
              </h1>

              {member.isAvailable && (
                <Badge className="mb-4 bg-green-500">Available</Badge>
              )}

              {member.lookingFor && (
                <Badge className="mb-4 bg-blue-500">{member.lookingFor}</Badge>
              )}

              <p className="text-white mb-6">{member.description}</p>

              <div className="space-y-3">
                {member.linkedinUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(member.linkedinUrl, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                )}
                
                {member.resumeUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(member.resumeUrl, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                )}

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = `mailto:${member.email}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Projects and Application */}
          <div className="md:col-span-2 space-y-8">
            {/* Skills Section */}
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Projects Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Projects & Demos</h2>
              <div className="space-y-4">
                {member.projects.map((project, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>
                    {project.imageUrl && (
                      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {project.demoUrl && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        View Demo
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            {member.videos && member.videos.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Demo Videos</h2>
                <div className="space-y-6">
                  {member.videos.map((video, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
                      <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                      <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                        <iframe
                          src={video.url.replace('watch?v=', 'embed/')}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      </div>
                      <p className="text-white">{video.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Application Responses */}
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Application Responses</h2>
              <div className="space-y-4">
                {member.applicationResponses && Object.entries(member.applicationResponses).map(([question, answer]) => (
                  <div key={question}>
                    <h3 className="font-medium text-white mb-2">{question}</h3>
                    <p className="text-white">{answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 