"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/admin");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignUp forceRedirectUrl="/admin" />
        </div>
      </main>
    </div>
  );
}