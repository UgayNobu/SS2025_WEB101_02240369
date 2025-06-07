In this practical, I created a simple React (Next.js) application that allows users to upload files with some important features like file validation, drag-and-drop upload, and upload progress tracking. This was my first time building a full file upload system, and it really helped me understand how to handle files in modern web apps.

To start with, I set up a new Next.js project and installed the required packages like react-hook-form, formidable, axios, and react-dropzone. These libraries made it much easier to manage form data and handle file uploads. I followed a clear folder structure to organize everything properly, which made the project more readable.

In the main form component (index.js), I used React Hook Form to manage input and validation. I added rules to only allow certain file types and limited the file size, which is an important part of real-world applications. I also created a basic API route in pages/api/upload.js to handle the server-side file processing.

The most interesting part for me was adding the drag-and-drop interface using react-dropzone and showing the upload progress with the help of axios. Watching the upload bar move in real-time made the project feel more dynamic and user-friendly. It also helped me understand how frontend and backend interact during a file upload process.

This practical helped improve my React and Next.js skills, especially when dealing with forms and file handling. I now feel more confident about building interactive forms that connect to APIs and handle file data in a secure and responsive way.

