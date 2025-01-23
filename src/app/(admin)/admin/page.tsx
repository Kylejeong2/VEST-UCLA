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
} from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=/admin');
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // Return nothing while redirecting
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-black text-white">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            All of VEST's internal tools
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/admin/settings">
            <div className="p-2 rounded-full hover:bg-accent transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </div>
          </Link>
        </div>
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
      </div>
    </div>
  );
}
