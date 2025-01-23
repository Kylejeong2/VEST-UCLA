"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  headshot: string;
  description: string;
  skills: string[];
  isAvailable: boolean;
}

export default function HirePage() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hire VEST Members</h1>
          <p className="text-xl text-gray-400">
            Connect with our talented members and find your next team member
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Link 
              key={member.id} 
              href={`/hire/${member.slug}`}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.headshot}
                    alt={`${member.firstName} ${member.lastName}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  {member.firstName} {member.lastName}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge variant="secondary">+{member.skills.length - 3}</Badge>
                  )}
                </div>
                {member.isAvailable && (
                  <Badge className="absolute top-4 right-4 bg-green-500">
                    Available
                  </Badge>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 