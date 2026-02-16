import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  
  // Redirect authenticated users to dashboard
  if (userId) {
    redirect('/dashboard');
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center py-32 px-8 text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to LinkList
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage and share your links in one place.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Sign in to get started and organize your links effortlessly.
        </p>
      </main>
    </div>
  );
}
