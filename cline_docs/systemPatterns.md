# System Patterns

## Architecture

- Next.js application using App Router (indicated by app/ directory structure)
- Page components using TypeScript (.tsx files)
- Static assets stored in public/ directory
- Shared components in app/components/ directory

## File Structure

```
app/
  components/
    Header.tsx
  policy/
    page.tsx
  terms/
    page.tsx
  page.tsx (top page)
  layout.tsx (root layout with shared Header)
public/
  eye_catch.png
  takeshy_logo.png
```

## Technical Decisions

- Using TypeScript for type safety
- App Router pattern for routing
- Static file serving through public directory
- Shared components for consistent UI across pages
- Root layout for common elements like header
