### `Practical 4: Connecting TikTok Frontend to Backend`

```markdown
# Practical 4: Connecting TikTok Frontend to Backend

## Objective
Integrate your Next.js frontend with an Express.js backend.

## Instructions

### Part 1: API & Auth Setup

1. Install:
   ```bash
   npm install axios jwt-decode react-hot-toast
Create src/lib/api-config.js with Axios instance.

Add .env.local:

```bash
Copy code
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```
Create authContext.jsx and wrap in layout.js.

Build UI components:

Modal.jsx

AuthForms.jsx

AuthModal.jsx

Add login/logout in MainLayout.jsx.

### Part 2: Video Features
Create:

videoService.js (API calls)

userService.js

Update:

VideoCard.jsx

VideoFeed.jsx (fetch real data)

Add pages:

following/page.jsx

explore-users/page.jsx

profile/[userId]/page.jsx

Update upload/page.jsx to allow uploads.

### Part 3: Test Everything
Register multiple users

Upload videos

Follow/unfollow

Like/unlike

Test login/logout flow

Resources
Axios

JWT

React Hook Form

Express.js