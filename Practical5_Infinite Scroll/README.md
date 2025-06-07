This practical was focused on adding infinite scrolling to the TikTok-style application I had been building. It was a very interesting task because it introduced me to cursor-based pagination and TanStack Query (React Query), which are both commonly used in real-world applications for handling large sets of data.

I started by understanding the difference between offset-based and cursor-based pagination. I learned that offset-based is simpler but not very reliable when data changes, while cursor-based is more accurate and efficient, especially for infinite scrolling. It was clear that for something like a video feed, cursor-based was the better choice.

In the backend, I updated the video controllers to return paginated data using cursors. This meant changing how the database queries were written with Prisma, and updating the API response to include nextCursor and hasNextPage. This backend part taught me how to control data flow more carefully and efficiently.

On the frontend, I installed TanStack Query and set up the useInfiniteQuery hook. I wrapped the app with QueryClientProvider and updated my video service to support cursor-based requests. One part that I found really cool was using the Intersection Observer API. Instead of checking scroll position manually, it watches when the last video is visible and then triggers a new fetch automatically.

I updated the VideoFeed.jsx component to work with the new pagination system. Watching the feed load more content as I scrolled was really satisfying and made the app feel more modern.

This practical helped me understand performance optimization in frontend apps and how to manage large datasets smoothly. I now feel confident about implementing infinite scroll in any React or Next.js project using modern tools and best practices.