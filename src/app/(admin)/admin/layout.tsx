import "@/app/globals.css";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Settings, Users, Search, UserCircle } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <Link href="/admin" className="text-xl font-bold">
            VEST Admin
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
        
        <nav className="space-y-2">
          <Link 
            href="/admin/cold-outreach" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Cold Outreach</span>
          </Link>
          <Link 
            href="/admin/application-reviewer" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Applications</span>
          </Link>
          <Link 
            href="/admin/profile" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <UserCircle className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link 
            href="/admin/settings" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
