### `Practical 6: State Management with Zustand`

```markdown
# Practical 6: State Management with Zustand

## Objective
Create a Todo App using Zustand for state management.

## Instructions

### Step 1: Setup

```bash
npx create-vite@latest todo-zustand
cd todo-zustand
npm install zustand
```

### Step 2: Folder Structure
```css
Copy code
src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.js
└── index.js
```

### Step 3: Zustand Store (todoStore.js)
Manages todos array

Actions:

addTodo()

toggleTodo()

removeTodo()

clearCompleted()

### Step 4–6: Build Components
TodoInput: Form input

TodoItem: Shows single todo

TodoList: Maps all todos

### Step 7: Combine in App.js
### Step 8: Add Persistence
Use Zustand's persist middleware to store todos in localStorage. 

Concepts
State stored centrally

Components access via hook

Only subscribed components re-render

