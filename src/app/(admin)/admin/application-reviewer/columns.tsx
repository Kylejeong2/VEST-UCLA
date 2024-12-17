"use client"

import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal, Mail } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export type Application = {
  id: string
  name: string
  email: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
  company: string
  position: string
  linkedinUrl: string
}

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "name",
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
      )
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white"
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const email = row.getValue("email") as string
      return (
        <div className="flex items-center gap-2">
          <span className="text-white">{email}</span>
          {email && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:text-white"
              onClick={() => window.open(`mailto:${email}`)}
            >
              <Mail className="h-4 w-4" />
            </Button>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "approved"
              ? "success"
              : status === "rejected"
              ? "destructive"
              : "default"
          }
          className="bg-opacity-20"
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      )
    },
  },
  {
    accessorKey: "submittedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white"
        >
          Submitted At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <span className="text-white">
          {new Date(row.getValue("submittedAt")).toLocaleDateString()}
        </span>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original

      const handleStatusChange = async (newStatus: string) => {
        try {
          const response = await fetch(`/api/applications/${application.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
          })
          if (!response.ok) {
            throw new Error('Failed to update status')
          }
          window.location.reload()
        } catch (error) {
          console.error('Error updating status:', error)
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 text-white hover:text-white">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black border-zinc-800">
            <DropdownMenuLabel className="text-white">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => window.open(application.linkedinUrl, '_blank')}
              className="text-white hover:bg-zinc-800"
            >
              View LinkedIn Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => window.open(`mailto:${application.email}`)}
              className="text-white hover:bg-zinc-800"
            >
              Send Email
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-zinc-800" />
            <DropdownMenuItem
              onClick={() => handleStatusChange('approved')}
              disabled={application.status === 'approved'}
              className="text-white hover:bg-zinc-800"
            >
              Approve
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusChange('rejected')}
              disabled={application.status === 'rejected'}
              className="text-red-400 hover:bg-zinc-800"
            >
              Reject
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]