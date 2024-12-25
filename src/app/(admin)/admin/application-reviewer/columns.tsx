"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal, Mail } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type Application = {
  id: string;
  candidateName: string;
  email: string;
  finalStatus: "ACCEPTED" | "REJECTED" | "NEEDS_REVIEW";
  timestamp: string;
  responses: Record<string, any>;
  linkedinUrl?: string;
  resumeUrl?: string;
  firstAnalysis: {
    status: string;
    confidence: number;
    reasoning: string;
  };
  secondAnalysis: {
    status: string;
    confidence: number;
    reasoning: string;
  };
  needsManualReview: boolean;
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "candidateName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const email = row.original.email;
      return (
        <div className="space-y-2">
          <div className="font-medium text-white">{row.getValue("candidateName")}</div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>{email}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 text-zinc-400 hover:text-white"
              onClick={() => window.open(`mailto:${email}`)}
            >
              <Mail className="h-3 w-3" />
            </Button>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "responses",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white"
        >
          Background
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const responses = row.getValue("responses") as Record<string, any>;
      const linkedinUrl = row.original.linkedinUrl;
      const resumeUrl = row.original.resumeUrl;
      
      return (
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="font-medium text-white">{responses?.["major/pre-major"] || "N/A"}</div>
            <div className="text-sm text-zinc-400">{responses?.["year"] || "N/A"}</div>
          </div>
          <div className="flex gap-2 text-xs">
            {linkedinUrl && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 border-zinc-800 bg-zinc-900 text-xs hover:bg-zinc-800"
                onClick={() => window.open(linkedinUrl, "_blank")}
              >
                LinkedIn
              </Button>
            )}
            {resumeUrl && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 border-zinc-800 bg-zinc-900 text-xs hover:bg-zinc-800"
                onClick={() => window.open(`https://drive.google.com/file/d/${resumeUrl}/view`, "_blank")}
              >
                Resume
              </Button>
            )}
          </div>
        </div>
      );
    },
    filterFn: (row, value) => {
      const responses = row.getValue("responses") as Record<string, string>;
      const major = responses?.["major/pre-major"]?.toLowerCase() || "";
      return major.includes((value as string).toLowerCase());
    },
  },
  {
    id: "analysis",
    header: "AI Analysis",
    cell: ({ row }) => {
      const first = row.original.firstAnalysis;
      const second = row.original.secondAnalysis;

      const getVariant = (status: string) => 
        status === "ACCEPTED" ? "success" :
        status === "REJECTED" ? "destructive" :
        "default";

      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant={getVariant(first.status)} className="bg-opacity-20">
                {first.status}
              </Badge>
              <span className="text-xs text-zinc-400">
                {(first.confidence * 100).toFixed(0)}% confident
              </span>
            </div>
            <div className="text-sm text-zinc-400 line-clamp-2">{first.reasoning}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant={getVariant(second.status)} className="bg-opacity-20">
                {second.status}
              </Badge>
              <span className="text-xs text-zinc-400">
                {(second.confidence * 100).toFixed(0)}% confident
              </span>
            </div>
            <div className="text-sm text-zinc-400 line-clamp-2">{second.reasoning}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "finalStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("finalStatus") as string;
      const needsManualReview = row.original.needsManualReview;
      const timestamp = new Date(row.original.timestamp);
      
      if (!status) return null;

      const variant = 
        status === "ACCEPTED" ? "success" :
        status === "REJECTED" ? "destructive" :
        "default";

      return (
        <div className="space-y-2">
          <Badge variant={variant} className="bg-opacity-20">
            {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
          </Badge>
          {needsManualReview && (
            <div className="text-xs text-yellow-500 font-medium">Needs Review</div>
          )}
          <div className="text-xs text-zinc-400">
            <div>{timestamp.toLocaleDateString()}</div>
            <div>{timestamp.toLocaleTimeString()}</div>
          </div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const status = (row.getValue("finalStatus") as string)?.toLowerCase() || "";
      return status.includes((value as string).toLowerCase());
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original;

      const handleStatusChange = async (newStatus: string) => {
        try {
          const response = await fetch(`/api/applications/${application.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
          });
          if (!response.ok) {
            throw new Error("Failed to update status");
          }
          window.location.reload();
        } catch (error) {
          console.error("Error updating status:", error);
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-white hover:text-white"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black border-zinc-800">
            <DropdownMenuLabel className="text-white">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleStatusChange("ACCEPTED")}
              disabled={application.finalStatus === "ACCEPTED"}
              className="text-emerald-400 hover:bg-zinc-800 hover:text-emerald-300"
            >
              Accept Application
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusChange("REJECTED")}
              disabled={application.finalStatus === "REJECTED"}
              className="text-red-400 hover:bg-zinc-800 hover:text-red-300"
            >
              Reject Application
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
