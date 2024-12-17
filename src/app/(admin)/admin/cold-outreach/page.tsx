"use client";

import React from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Search, FileText } from "lucide-react";

export default function ColdOutreachPage() {
  return (
    <div className="container mx-auto p-8 bg-black min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-white">Cold Outreach</h1>
          <p className="text-zinc-400">
            Manage your outreach campaigns and leads
          </p>
        </div>
        <Link href="/admin">
          <Button variant="outline" className="border-zinc-800 bg-black hover:bg-zinc-900 text-white">
            Back to Admin
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/cold-outreach/search" className="block group">
          <Card className="p-6 hover:shadow-xl transition-all border border-zinc-800 group-hover:border-white bg-black">
            <div className="space-y-3">
              <div className="bg-white/10 w-fit p-3 rounded-lg">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Search Companies</h2>
                <p className="text-zinc-400 text-sm">
                  Search and filter companies for outreach campaigns
                </p>
              </div>
            </div>
          </Card>
        </Link>

      </div>
    </div>
  );
}