# Authentication with Clerk

**IMPORTANT**: Clerk is the ONLY authentication method for this application. Do not implement any other auth solution.

## Core Authentication Rules

### 1. Modal-Only Sign In/Up

Always use `mode="modal"` for Clerk authentication buttons:

```typescript
// ✅ DO: Use modal mode for auth
import { SignInButton, SignUpButton } from '@clerk/nextjs';

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>

// ❌ DON'T: Use redirect or other modes
<SignInButton mode="redirect"> {/* Never use this */}
```

### 2. Protected Dashboard Route

The `/dashboard` route MUST be protected and require authentication:

```typescript
// app/dashboard/page.tsx
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }
  
  // Dashboard content
  return <Dashboard />;
}
```

### 3. Homepage Redirect for Authenticated Users

Logged-in users accessing the homepage should be redirected to `/dashboard`:

```typescript
// app/page.tsx
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }
  
  // Public homepage content for non-authenticated users
  return <LandingPage />;
}
```

## Header Pattern

Standard header with modal auth buttons:

```typescript
// components/header.tsx (or app/layout.tsx)
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1>LinkList</h1>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
```

## Server Actions with Auth

Always validate authentication in Server Actions:

```typescript
'use server';

import { auth } from '@clerk/nextjs/server';

export async function createLink(formData: FormData) {
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error('Unauthorized');
  }
  
  // Process the action
}
```

## API Routes Protection

Protect all API routes:

```typescript
// app/api/links/route.ts
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = await auth();
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Handle request
}
```

## Middleware (Optional)

For global route protection, use Clerk middleware:

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

## Key Reminders

- ✅ Always use Clerk for authentication
- ✅ Always use `mode="modal"` for sign in/up
- ✅ Protect `/dashboard` route
- ✅ Redirect authenticated users from `/` to `/dashboard`
- ❌ Never implement custom auth
- ❌ Never use redirect mode for Clerk buttons
