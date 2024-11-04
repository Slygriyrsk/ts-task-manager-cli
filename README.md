# Task Manager CLI

A command-line interface (CLI) application for managing tasks, built with TypeScript.

## Features

- Add new tasks with title, description, priority, and status
- Complete tasks
- Update task status
- View all tasks
- View tasks by priority
- Delete all tasks
- Delete task by ID
- Delete tasks by filter

## Folder Structure

```script
task-manager-cli/
├── dist/
│   ├── cli.js
│   ├── TaskManager.js
│   └── types.js
├── src/
│   ├── cli.ts
│   ├── TaskManager.ts
│   └── types.ts
├── .gitignore
├── .npmignore
├── package.json
├── README.md
└── tsconfig.json
```

## Installation

You can install the Task Manager CLI globally using npm:

```
npm install -g task-manager-cli
```

## Usage

After installation, you can run the Task Manager CLI by typing `task-manager` in your terminal:

```
task-manager
```

### Commands

The CLI will present you with the following options:

1. **Add a new task**: 
   Prompts you to enter task details (title, description, priority, status).

   Example:
   ```
   ? Enter task title: Complete project report
   ? Enter task description: Finish the quarterly project report
   ? Select task priority: High
   ? Select task status: Todo
   Task added successfully!
   ```

2. **Complete a task**: 
   Shows a list of tasks and allows you to mark one as completed.

   Example:
   ```
   ? Select a task to complete: Complete project report
   Task status changed from Todo to Completed
   ```

3. **Update task status**: 
   Allows you to change the status of a task.

   Example:
   ```
   ? Select a task to update: Review code changes
   ? Select new status: InProgress
   Task status changed from Todo to InProgress
   ```

4. **View all tasks**: 
   Displays a table with all tasks.

   Example:
   ```
   ┌─────────┬──────────────────────┬────────────────────────────────┬──────────┬────────────┐
   │ (index) │        title         │          description           │ priority │   status   │
   ├─────────┼──────────────────────┼────────────────────────────────┼──────────┼────────────┤
   │    1    │ Complete project ... │ Finish the quarterly proje ... │  'High'  │ 'Completed'│
   │    2    │ Review code changes  │ Review pull request #42        │ 'Medium' │ 'InProgr..'│
   └─────────┴──────────────────────┴────────────────────────────────┴──────────┴────────────┘
   ```

5. **View tasks by priority**: 
   Allows you to filter tasks by priority (Low, Medium, High).

   Example:
   ```
   ? Select priority: High
   ┌─────────┬──────────────────────┬────────────────────────────────┬──────────┬────────────┐
   │ (index) │        title         │          description           │ priority │   status   │
   ├─────────┼──────────────────────┼────────────────────────────────┼──────────┼────────────┤
   │    1    │ Complete project ... │ Finish the quarterly proje ... │  'High'  │ 'Completed'│
   └─────────┴──────────────────────┴────────────────────────────────┴──────────┴────────────┘
   ```
 
6. **Delete all tasks**:
   Deletes all tasks in the system.

7. **Delete task by ID**:
   Allows you to delete a specific task by its ID.
   Example:
   ```
   ? Complete project
   ```

8. **Delete tasks by filter**:
   Allows you to delete tasks based on specific criteria (ID, title, description, priority, or status).

   Example:
   ```
   ? id
     title
     description
     priority
     status
   ```

9. **Exit**: 
   Closes the application.

## Development

To set up the project for development:

1. Clone the repository:
   ```
   git clone https://github.com/Slygriyrsk/task-manager-cli.git
   cd task-manager-cli
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

![Screenshot 2024-11-01 232602](https://github.com/user-attachments/assets/1c95b5e0-a8cd-436a-8aab-1f7efa4d9fb0)

4. Run the CLI in development mode:
   ```
   npm start
   ```
![Screenshot 2024-11-01 233652](https://github.com/user-attachments/assets/44c8e194-5491-4a28-a9b7-f9e1f112e23c)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
