# UI Components with shadcn/ui

**CRITICAL RULE**: ALL UI elements in this application MUST use shadcn/ui components. DO NOT create custom UI components.

## Core Principle

Always use existing shadcn/ui components from `@/components/ui`. Never build custom alternatives for buttons, inputs, dialogs, cards, or any other UI primitives.

## Installation

When you need a shadcn/ui component that doesn't exist yet:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
```

## Component Usage

### Buttons

```typescript
// ✅ DO: Use shadcn/ui Button
import { Button } from "@/components/ui/button";

<Button variant="default">Click me</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Menu</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// ❌ DON'T: Create custom button components
function CustomButton() { ... } // Never do this
```

### Dialogs & Modals

```typescript
// ✅ DO: Use shadcn/ui Dialog
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

// ❌ DON'T: Build custom modal components
```

### Forms & Inputs

```typescript
// ✅ DO: Use shadcn/ui Input and Label
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// ✅ DO: Use shadcn/ui Form for complex forms
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

// ❌ DON'T: Create custom input wrappers
```

### Cards

```typescript
// ✅ DO: Use shadcn/ui Card
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Link Title</CardTitle>
    <CardDescription>Link description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// ❌ DON'T: Create custom card components
```

### Dropdowns

```typescript
// ✅ DO: Use shadcn/ui DropdownMenu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Alerts & Toasts

```typescript
// ✅ DO: Use shadcn/ui Alert
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>

// ✅ DO: Use shadcn/ui Sonner for toasts
import { toast } from "sonner";

toast.success("Link created successfully!");
toast.error("Failed to delete link");
```

### Tables

```typescript
// ✅ DO: Use shadcn/ui Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Title</TableHead>
      <TableHead>URL</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Example</TableCell>
      <TableCell>https://example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Customization

Customize shadcn/ui components using Tailwind classes via `className`:

```typescript
// ✅ DO: Customize with className
<Button className="bg-gradient-to-r from-blue-600 to-purple-600">
  Custom Style
</Button>

<Card className="border-2 border-blue-500 shadow-xl">
  <CardHeader>Custom Card</CardHeader>
</Card>
```

## Available Components

Common shadcn/ui components to use:
- `button` - Buttons of all variants
- `card` - Card containers
- `dialog` - Modals and dialogs
- `input` - Text inputs
- `label` - Form labels
- `select` - Dropdown selects
- `textarea` - Multi-line text inputs
- `checkbox` - Checkboxes
- `radio-group` - Radio buttons
- `switch` - Toggle switches
- `alert` - Alert messages
- `badge` - Badges and tags
- `avatar` - User avatars
- `skeleton` - Loading skeletons
- `table` - Data tables
- `tabs` - Tab navigation
- `dropdown-menu` - Dropdown menus
- `popover` - Popovers
- `tooltip` - Tooltips
- `form` - Form components

## Key Reminders

- ✅ ALWAYS use shadcn/ui components for ALL UI elements
- ✅ Import from `@/components/ui/[component-name]`
- ✅ Customize using `className` prop with Tailwind
- ✅ Install missing components with `npx shadcn@latest add [component]`
- ❌ NEVER create custom UI component alternatives
- ❌ NEVER build your own buttons, inputs, dialogs, etc.
