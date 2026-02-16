import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link2, Share2, FolderOpen, Zap, Shield, CheckCircle } from 'lucide-react';

export default async function HomePage() {
  const { userId } = await auth();
  
  // Redirect authenticated users to dashboard
  if (userId) {
    redirect('/dashboard');
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 sm:py-32 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Organize Your Links,
            <br />
            Simplify Your Life
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            LinkList is your centralized hub for managing and sharing all your important links. 
            Stay organized, save time, and never lose track of important URLs again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-base">
                Get Started Free
              </Button>
            </SignUpButton>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to Manage Links
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features designed to help you organize, access, and share your links effortlessly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                  <Link2 className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Link Management</CardTitle>
                <CardDescription>
                  Store and organize all your important links in one secure place. Add, edit, and delete with ease.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                  <Share2 className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle>Easy Sharing</CardTitle>
                <CardDescription>
                  Share your curated link collections with others instantly. Perfect for teams and collaboration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                  <FolderOpen className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle>Smart Organization</CardTitle>
                <CardDescription>
                  Categorize and tag your links for quick retrieval. Find what you need when you need it.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Access your links instantly from any device. Quick search and navigation keep you productive.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is protected with industry-standard security. Only you control your links.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                </div>
                <CardTitle>Simple Interface</CardTitle>
                <CardDescription>
                  Clean, intuitive design makes managing links effortless. No learning curve, just results.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Get Organized?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who have simplified their digital life with LinkList.
            Start managing your links better today.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" className="text-base">
              Create Your Free Account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LinkList. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
