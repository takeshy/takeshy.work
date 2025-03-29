# System Patterns

## Architecture

- Next.js application using App Router (indicated by app/ directory structure)
- Page components using TypeScript (.tsx files)
- Static assets stored in public/ directory

## File Structure

```
app/
  policy/
    page.tsx
  terms/
    page.tsx
  page.tsx (top page)
public/
  eye_catch.png
```

## Technical Decisions

- Using TypeScript for type safety
- App Router pattern for routing
- Static file serving through public directory
