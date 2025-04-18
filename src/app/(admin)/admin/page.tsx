"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Search,
  Settings,
  ChevronRight,
  UserCircle,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in?redirect_url=/admin');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return null;
  }

  return (
    <div className="p-8">
      <div className="space-y-1 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          All of VEST's internal tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/cold-outreach" className="block group">
          <Card className="p-6 transition-all border bg-zinc-900 hover:bg-zinc-950 text-white border-zinc-800">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="bg-primary/10 dark:bg-primary/20 w-fit p-3 rounded-lg">
                  <Search className="w-6 h-6 text-white dark:text-primary/90" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    Cold Outreach Automation
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Search and enrich LinkedIn profiles, manage outreach
                    campaigns
                  </p>
                </div>
                <div className="flex items-center text-sm text-white">
                  <span>View campaigns</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary dark:text-primary/90 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>
        </Link>

        <Link href="/admin/application-reviewer" className="block group">
          <Card className="p-6 transition-all border bg-zinc-900 hover:bg-zinc-950 text-white border-zinc-800">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="bg-primary/10 dark:bg-primary/20 w-fit p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white dark:text-primary/90" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    Application Reviewer
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Review and manage incoming applications with AI assistance
                  </p>
                </div>
                <div className="flex items-center text-sm text-white">
                  <span>Review applications</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary dark:text-primary/90 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>
        </Link>

        <Link href="/admin/profile" className="block group">
          <Card className="p-6 transition-all border bg-zinc-900 hover:bg-zinc-950 text-white border-zinc-800">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="bg-primary/10 dark:bg-primary/20 w-fit p-3 rounded-lg">
                  <UserCircle className="w-6 h-6 text-white dark:text-primary/90" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    Profile Management
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Update your member profile, skills, and portfolio
                  </p>
                </div>
                <div className="flex items-center text-sm text-white">
                  <span>Manage profile</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary dark:text-primary/90 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
