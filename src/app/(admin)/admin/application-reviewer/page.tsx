"use client";

import React, { Suspense, useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function ApplicationReviewerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button
                variant="outline"
                className="border-zinc-800 bg-black hover:bg-zinc-900 text-white"
              >
                Back
              </Button>
            </Link>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Application Reviewer
              </h1>
              <p className="text-zinc-400">
                Review and manage incoming applications
              </p>
            </div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[200px] bg-zinc-900/50 rounded-lg border border-zinc-800">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
                <p className="text-lg text-zinc-400">Loading applications...</p>
              </div>
            </div>
          }
        >
          <ApplicationTable />
        </Suspense>
      </div>
    </div>
  );
}

function ApplicationTable() {
  const [applications, setApplications] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/applications')
        if (!response.ok) {
          throw new Error('Failed to load applications')
        }
        const data = await response.json()
        setApplications(data)
      } catch (error) {
        setError('Failed to load applications. Please try again later.')
      }
    }

    // Initial fetch
    fetchApplications()

    // Set up polling every 30 seconds
    const interval = setInterval(fetchApplications, 30000)

    return () => clearInterval(interval)
  }, [])

  if (error) {
    return (
      <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-900/50">
        <p className="text-sm text-red-400">{error}</p>
      </div>
    );
  }

  return <DataTable columns={columns} data={applications} />;
}
