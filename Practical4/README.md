This practical was a major step forward in my learning because I got to connect the frontend I had built earlier using Next.js to a real Express.js backend. The goal was to create a fully working TikTok-like app with features like user login, personalized feeds, video uploads, and following other users. It felt like I was finally building something close to a real-world social media app.

In the beginning, I learned how to set up an API client using Axios. I added authentication tokens automatically with interceptors, which helped me understand how JWT-based login systems work. Setting up environment variables and storing tokens safely in local storage also taught me best practices for handling auth.

I created an authentication context to manage user state across the entire application, which made things much more organized. Building reusable modals for login and signup was a bit tricky, but I managed to create clean UI components that worked well and showed error or success messages clearly.

After that, I connected the video feed to real data from the backend. Instead of mock videos, I fetched real ones, showed loading states, and handled likes and comments. It was exciting to see my app responding with real content, and I learned a lot about dynamic UI updates based on API calls.

One of the best parts was implementing social features like following/unfollowing users and viewing a "Following" feed. I also added a user discovery page and dynamic profile pages that displayed videos based on the user’s ID. These tasks made me think more deeply about how frontends and backends work together.

Finally, I updated the upload page so logged-in users could upload videos with captions and thumbnails. It completed the app’s full-circle functionality.

Overall, this practical helped me combine everything I’ve learned so far—frontend design, backend logic, API integration, state management, and authentication. It was challenging but very rewarding. I feel much more confident now in my ability to build full-stack applications from scratch.