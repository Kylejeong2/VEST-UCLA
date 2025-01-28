import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton: "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700",
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                footerActionLink: "hidden",
                formFieldInput: "bg-zinc-800 border-zinc-700 text-white",
                formFieldLabel: "text-gray-400",
              },
            }}
            signUpUrl=""
            afterSignInUrl="/admin"
          />
        </div>
      </main>
    </div>
  );
}