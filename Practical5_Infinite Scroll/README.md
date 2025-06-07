###  `Practical 5: Infinite Scroll with TanStack Query`

```markdown
# Practical 5: Infinite Scroll with TanStack Query

## Objective
Implement infinite scrolling in the TikTok app using TanStack Query and cursor-based pagination.

## Instructions

### Part 1: Backend Setup

1. In `videoController.js`, update `getAllVideos()` for cursor-based pagination.

2. Update `getFollowingVideos()` the same way.

---

### Part 2: Frontend Setup

1. Install:
   ```bash
   npm install @tanstack/react-query @tanstack/react-query-devtools
In layout.js, wrap app in QueryClientProvider.

Update videoService.js for cursor-based API calls.

Create useIntersectionObserver.js to detect scroll.

In VideoFeed.jsx, use useInfiniteQuery to load videos.

# Key Differences from Offset Pagination
Uses cursor instead of page

Responses include nextCursor and hasNextPage

Efficient, consistent scroll behavior