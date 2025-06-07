# Practical 1: TikTok Web Layout with Next.js

## Objective
Build a TikTok-style web layout using Next.js, Tailwind CSS, and implement basic routing, layout, video feed, and form handling.

## Instructions

### Part 1: Getting Started
1. Open terminal and go to your project directory.
2. Create a Next.js app:
   ```bash
   npx create-next-app@latest
TypeScript: No

ESLint: Yes

Tailwind CSS: Yes

src/ folder: Yes

App Router: Yes

Clean up the default files:

Edit src/app/page.js

Remove unused CSS and keep only Tailwind directives:

```css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Create project folders:

```bash
Copy code
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
```
Add basic layout in MainLayout.jsx and update src/app/layout.js.

Create pages:

/profile/page.jsx

/upload/page.jsx

/following/page.jsx

/explore/page.jsx

/live/page.jsx

Start dev server:

```bash
Copy code
npm run dev

```
### Part 2: Web Layout & Interface
Install icons:

```bash
Copy code
npm install react-icons
```
Build sidebar and main layout in MainLayout.jsx.

Create:

VideoCard.jsx

VideoFeed.jsx

Update:

src/app/page.js to show the video feed

### Part 3: Login and Registration
Install:

```bash
Copy code
npm install react-hook-form
```
Create:

src/app/login/page.jsx

src/app/signup/page.jsx

Add validation using react-hook-form.

Link login/signup in MainLayout.jsx.

Test validation (empty fields, invalid email, mismatched password, etc.)

Resources
React Docs

Next.js Docs

React Hook Form