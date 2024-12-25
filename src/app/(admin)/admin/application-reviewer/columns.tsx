"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ApplicationStatus } from "@prisma/client";

export type Application = {
  id: string;
  timestamp: Date;
  candidateName: string;
  email: string;
  responses: any;
  firstAnalysis: {
    status: ApplicationStatus;
    confidence: number;
    reasoning: string;
  };
  secondAnalysis: {
    status: ApplicationStatus;
    confidence: number;
    reasoning: string;
  };
  finalStatus: ApplicationStatus;
  firstReasoning: string;
  secondStatus: ApplicationStatus;
  secondReasoning: string;
  needsManualReview: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const statusColors = {
  ACCEPTED: "bg-emerald-500 text-emerald-50",
  REJECTED: "bg-red-500 text-red-50",
  NEEDS_REVIEW: "bg-yellow-500 text-yellow-50",
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
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white"
        >
          Submitted
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return new Date(row.getValue("timestamp")).toLocaleString();
    },
  },
  {
    accessorKey: "firstAnalysis",
    header: "First Analysis",
    cell: ({ row }) => {
      const analysis = row.getValue("firstAnalysis") as Application["firstAnalysis"];
      return (
        <div className="space-y-1">
          <Badge className={statusColors[analysis.status]}>
            {analysis.status.replace("_", " ")}
          </Badge>
          <div className="text-xs text-zinc-400">
            Confidence: {(analysis.confidence * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-zinc-400 max-w-[200px] truncate" title={analysis.reasoning}>
            {analysis.reasoning}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "secondAnalysis",
    header: "Second Analysis",
    cell: ({ row }) => {
      const analysis = row.getValue("secondAnalysis") as Application["secondAnalysis"];
      return (
        <div className="space-y-1">
          <Badge className={statusColors[analysis.status]}>
            {analysis.status.replace("_", " ")}
          </Badge>
          <div className="text-xs text-zinc-400">
            Confidence: {(analysis.confidence * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-zinc-400 max-w-[200px] truncate" title={analysis.reasoning}>
            {analysis.reasoning}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "finalStatus",
    header: "Final Status",
    cell: ({ row }) => {
      const status = row.getValue("finalStatus") as ApplicationStatus;
      return (
        <Badge className={statusColors[status]}>
          {status.replace("_", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "needsManualReview",
    header: "Needs Review",
    cell: ({ row }) => {
      return row.getValue("needsManualReview") ? (
        <Badge variant="destructive">Yes</Badge>
      ) : (
        <Badge variant="secondary">No</Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original;

      const handleStatusChange = async (newStatus: ApplicationStatus) => {
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
            <DropdownMenuLabel className="text-white">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                const responses = application.responses;
                const formattedResponses = Object.entries(responses)
                  .map(([q, a]) => `${q}: ${a}`)
                  .join("\n");
                alert(formattedResponses);
              }}
              className="text-white hover:bg-zinc-800"
            >
              View Responses
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => window.open(`mailto:${application.email}`)}
              className="text-white hover:bg-zinc-800"
            >
              Send Email
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-zinc-800" />
            <DropdownMenuItem
              onClick={() => handleStatusChange("ACCEPTED")}
              disabled={application.finalStatus === "ACCEPTED"}
              className="text-emerald-400 hover:bg-zinc-800"
            >
              Accept
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusChange("REJECTED")}
              disabled={application.finalStatus === "REJECTED"}
              className="text-red-400 hover:bg-zinc-800"
            >
              Reject
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusChange("NEEDS_REVIEW")}
              disabled={application.finalStatus === "NEEDS_REVIEW"}
              className="text-yellow-400 hover:bg-zinc-800"
            >
              Mark for Review
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
