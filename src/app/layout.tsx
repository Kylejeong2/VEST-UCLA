import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "VEST at UCLA",
  description: "Scaling builder culture at UCLA",
  icons: {
    icon: "/images/VEST-logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Toaster position="top-right" theme="dark" />
      </body>
    </html>
  );
}
