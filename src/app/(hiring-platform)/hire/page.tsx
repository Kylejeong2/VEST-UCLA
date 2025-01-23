"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { MemberCard } from "@/lib/types/hiring";

export default function HirePage() {
  const [members, setMembers] = useState<MemberCard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-white text-sm">Loading members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Hire VEST Members
            </h1>
            <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
              Use natural language to find your ideal founding team members.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search by skills, interests, or experience..."
                className="w-full bg-zinc-800/50 border-zinc-700 pl-12 py-5 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Link 
              key={member.id} 
              href={`/hire/${member.slug}`}
              className="group"
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={member.headshot}
                    alt={`${member.firstName} ${member.lastName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    {member.lookingFor && (
                      <Badge className="bg-blue-500/90 backdrop-blur-sm">
                        {member.lookingFor}
                      </Badge>
                    )}
                    {member.isAvailable && (
                      <Badge className="bg-green-500/90 backdrop-blur-sm">
                        Available
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    {member.firstName} {member.lastName}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(member.skills || []).slice(0, 3).map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-zinc-800 text-gray-300 border-zinc-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {member.skills && member.skills.length > 3 && (
                      <Badge 
                        variant="secondary"
                        className="bg-zinc-800 text-gray-300 border-zinc-700"
                      >
                        +{member.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 