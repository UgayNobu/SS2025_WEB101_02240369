## Practical 5: Infinite Scroll with TanStack Query

### a) Documentation
- Implemented cursor-based pagination.
- Used `useInfiniteQuery` from `@tanstack/react-query`.
- Added `IntersectionObserver` to detect scroll.

### b) Reflection
This practical showed me how modern apps handle infinite scroll efficiently. Initially, my scroll detection wasn’t working because I didn’t assign the ref properly. After debugging and inspecting the observer logic, I fixed it. Learning how to switch from page-based to cursor-based pagination was a big takeaway.
