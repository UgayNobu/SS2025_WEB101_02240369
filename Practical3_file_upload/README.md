### ✅ `Practical 3: File Upload Implementation`

```markdown
# Practical 3: File Upload Implementation

## Objective
Create a file upload form in React with:
- Multipart data handling
- File validation
- Upload progress
- Drag and drop

## Instructions

### Part 1: Setup

1. Create project:
   ```bash
   npx create-next-app file-upload
   cd file-upload
   ```
Install dependencies:

```bash
Copy code
npm install react-hook-form formidable axios react-dropzone
``` 

### Part 2: Build Upload Form
In pages/index.js:

Use react-hook-form

Add file type & size validation

Implement drag-and-drop

In pages/api/upload.js:

Use formidable to parse form data

Track upload progress and handle errors