# Agent Instructions for LinkList Project

> **Comprehensive Coding Standards for AI Agents**

This document serves as the entry point for all coding standards and best practices when working on the LinkList project. Each topic has been organized into dedicated files for easier navigation and maintenance.

## 📚 Documentation Structure

The agent instructions are organized into the following sections:

### **[Authentication with Clerk](docs/auth-clerk.md)** ⚠️ **READ FIRST**
   - Clerk is the ONLY auth method
   - Modal-only sign in/up (`mode="modal"`)
   - Protected `/dashboard` route
   - Homepage redirect for authenticated users
   - Server Actions and API route protection

### **[UI Components with shadcn/ui](docs/ui-components.md)** ⚠️ **CRITICAL**
   - ALL UI elements MUST use shadcn/ui components
   - NEVER create custom UI components
   - Use `@/components/ui/*` for all UI primitives
   - Customize via `className` prop only

For detailed guidelines on specific topics, refer to the modular documentation in the '/docs' directory.
ALWAYS refer to relevant .md files BEFORE generating any code.

## ✅ Essential Checklist

Before submitting code, ensure:

- [ ] TypeScript strict mode with no `any` types
- [ ] Server Components by default (use `'use client'` only when needed)
- [ ] Tailwind CSS utility classes with `cn()` helper
- [ ] shadcn/ui components from `@/components/ui`
- [ ] Drizzle ORM for all database operations
- [ ] Clerk auth protection for routes and APIs
- [ ] Path aliases (`@/`) for imports
- [ ] Try-catch error handling for async operations
- [ ] Proper TypeScript types for all functions
- [ ] Loading and error states for async UI
- [ ] ARIA labels for accessibility
- [ ] Descriptive variable and function names
- [ ] Conventional commit messages

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui (new-york style)
- **Auth**: Clerk
- **Database**: PostgreSQL with Drizzle ORM
- **Icons**: Lucide React

## 📖 Contributing

When updating these standards:

1. Keep examples concise and practical
2. Use ✅ DO and ❌ DON'T patterns
3. Update the relevant topic file in `/docs`
4. Update this index if adding new sections
5. Follow conventional commits for documentation changes

---

**Last Updated**: February 16, 2026  
**Project Version**: 0.1.0

For detailed information on any topic, refer to the linked documentation files above.
