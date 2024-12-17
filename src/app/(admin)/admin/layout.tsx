import '@/app/globals.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background bg-black text-white">
      {children}
    </div>
  )
} 