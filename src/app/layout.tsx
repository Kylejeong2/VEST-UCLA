import Layout from "@/components/Layout";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "VEST @ UCLA",
  description: "Scaling builders at UCLA",
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
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <Layout>{children}</Layout>
          <Toaster position="top-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}
