This practical was about building a basic Todo List app using Zustand for state management. Before this, I had used React's built-in state and sometimes Context API, but Zustand was new to me. After doing this, I found it much simpler and cleaner to manage state, especially when components are deeply nested.

I started by setting up a new React project with Vite and installed Zustand. I created a proper folder structure with components like TodoInput, TodoItem, and TodoList, and a separate store folder to manage all the logic with Zustand.

The most important part was creating the Zustand store in todoStore.js. I learned how to define state (in this case, a list of todos) and add actions like addTodo, toggleTodo, removeTodo, and clearCompleted. What I really liked was how Zustand made it easy to access and update state without needing props or complex setup.

Then I built the UI using simple components. The TodoInput component let users add new tasks, TodoItem displayed each task, and TodoList handled rendering the list and updating based on user interactions. The state was shared across all components smoothly with just one line: useTodoStore(...).

One of the coolest things was adding persistence. By using Zustand’s middleware, I saved the todo list to localStorage. This way, even if I refreshed the browser, the tasks didn’t disappear. It made the app feel more like a real, useful product.

In the end, I understood that Zustand offers a much lighter and more efficient way to manage state compared to Redux or even React Context in many situations. This practical helped me see how useful third-party libraries can be when building scalable React apps.

