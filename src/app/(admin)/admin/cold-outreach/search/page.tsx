'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Download } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

export default function SearchPage() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setData([])
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query.trim() })
      })
      const results = await response.json()
      setData(results)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  const handleExport = () => {
    const csvContent = [
      ['Name', 'Email', 'LinkedIn Profile URL', 'Position'],
      ...data.map(row => [row.name, row.email, row.linkedinUrl, row.position])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/cold-outreach">
                <Button variant="outline" className="border-zinc-800 bg-black hover:bg-zinc-900 text-white">
                  Back
                </Button>
              </Link>
              <div className="space-y-1">
                <motion.h1 
                  className="text-4xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Lead Search
                </motion.h1>
                <p className="text-zinc-400">
                  Search and export potential leads
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  placeholder="Enter LinkedIn search query..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-96 bg-black border-zinc-800 text-white placeholder:text-zinc-500"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <AnimatePresence>
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button 
                onClick={handleSearch} 
                disabled={loading || !query.trim()}
                className="min-w-[100px] relative bg-black text-white hover:bg-zinc-900"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching...
                  </span>
                ) : (
                  'Search'
                )}
              </Button>
              <Button 
                onClick={handleExport} 
                disabled={data.length === 0}
                variant="outline"
                className="border-zinc-800 bg-black hover:bg-zinc-900 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative bg-black rounded-lg border border-zinc-800 p-4"
        >
          {loading ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center min-h-[200px]">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-12 w-12 animate-spin text-white" />
                  <p className="text-sm text-zinc-400 animate-pulse">
                    Searching and enriching profiles...
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="h-12 w-full bg-zinc-800" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </motion.div>
      </div>
    </div>
  )
} 