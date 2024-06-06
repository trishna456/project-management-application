# Project Management Website

This repository contains a Project Management website built with React, featuring functionalities to add, edit, delete, and manage projects. The project showcases advanced React concepts and utilizes Tailwind CSS for styling, ensuring a clean and responsive user interface.

## Features

- **Project Management**: Add, edit, delete, and manage projects efficiently.
- **Error Handling**: Display error modals for invalid input fields, enhancing user experience and data validation.
- **Task Management**: Add and manage tasks within projects.
- **Responsive Design**: Styled using Tailwind CSS to ensure a responsive and modern design.

## Key Concepts and Implementation

### Component Structure
- **Projects Sidebar**: A sidebar component to navigate and manage projects.
- **Reusable Components**: Created reusable components for inputs and buttons to maintain consistency and reusability across the application.

### Styling
- **Tailwind CSS**: Utilized Tailwind CSS for styling components, ensuring a clean and responsive design.
- **Splitting Components**: Split components to separate JSX and Tailwind styles, enhancing reusability and maintainability.

### State Management
- **Component State**: Managed state to switch between different components, ensuring smooth navigation and interaction.
- **Prop Drilling**: Managed tasks and state updates through prop drilling, ensuring data flows correctly between components.

### Form Handling and Validation
- **User Input**: Collected user input using refs and forwarded refs for efficient data handling.
- **Input Validation**: Validated user input and displayed error modals using the `useImperativeHandle` hook, providing a seamless user experience.

### CRUD Operations
- **Project Creation and Deletion**: Handled project creation, deletion, and updates, ensuring data consistency and integrity.
- **Task Management**: Added functionalities to manage tasks within projects, including adding, clearing, and managing tasks.

## Technical Stack

- **Frontend**: React, JavaScript, HTML, CSS
- **Styling**: Tailwind CSS
- **Concepts**: State management, refs, forwarded refs, `useImperativeHandle`, prop drilling

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/trishna456/project-management-application.git
```

2. Navigate to the project directory:
```bash
cd project-management-application
```

3. Install dependencies using npm or yarn:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```
