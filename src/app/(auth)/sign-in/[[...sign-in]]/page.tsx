import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignIn forceRedirectUrl="/admin" />
        </div>
      </main>
    </div>
  );
}