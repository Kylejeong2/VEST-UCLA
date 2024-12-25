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
import { Checkbox } from "@/components/ui/checkbox";

export type Lead = {
  id: string;
  name: string;
  email: string;
  linkedinUrl: string;
  position: string;
  company: string;
  selected?: boolean;
};

export const columns: ColumnDef<Lead>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
        className="border-zinc-700 data-[state=checked]:bg-zinc-700 data-[state=checked]:border-zinc-700"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-zinc-700 data-[state=checked]:bg-zinc-700 data-[state=checked]:border-zinc-700"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-zinc-200 hover:text-white hover:bg-zinc-800"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-zinc-200">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-zinc-200 hover:text-white hover:bg-zinc-800"
        >
          Position
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-zinc-200">{row.getValue("position")}</div>
    ),
  },
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-zinc-200 hover:text-white hover:bg-zinc-800"
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-zinc-200">{row.getValue("company")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-zinc-200 hover:text-white hover:bg-zinc-800"
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return (
        <div className="flex items-center gap-2">
          <span className="text-zinc-200">{email}</span>
          {email && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-zinc-200 hover:text-white hover:bg-zinc-800"
              onClick={() => window.open(`mailto:${email}`)}
            >
              <Mail className="h-4 w-4" />
            </Button>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const lead = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-zinc-200 hover:text-white hover:bg-zinc-800"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
            <DropdownMenuLabel className="text-zinc-200">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => window.open(lead.linkedinUrl, "_blank")}
              className="text-zinc-200 hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white"
            >
              View LinkedIn Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-zinc-800" />
            <DropdownMenuItem
              onClick={() => window.open(`mailto:${lead.email}`)}
              className="text-zinc-200 hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white"
            >
              Send Email
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
