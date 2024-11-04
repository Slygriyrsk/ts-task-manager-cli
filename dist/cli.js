"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const TaskManager_1 = require("./TaskManager");
const taskManager = new TaskManager_1.TaskManager();
async function mainMenu() {
    const { action } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'Add a new task',
            'Complete a task',
            'Update task status',
            'View all tasks',
            'View tasks by priority',
            'Delete all tasks',
            'Delete task by ID',
            'Delete tasks by filter',
            'Exit'
        ]
    });
    switch (action) {
        case 'Add a new task':
            await addTask();
            break;
        case 'Complete a task':
            await completeTask();
            break;
        case 'Update task status':
            await updateTaskStatus();
            break;
        case 'View all tasks':
            viewAllTasks();
            break;
        case 'View tasks by priority':
            await viewTasksByPriority();
            break;
        case 'Delete all tasks':
            deleteAllTasks();
            break;
        case 'Delete task by ID':
            await deleteTaskById();
            break;
        case 'Delete tasks by filter':
            await deleteTaskByFilter();
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
    }
    await mainMenu();
}
async function addTask() {
    const task = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter task title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter task description:'
        },
        {
            type: 'list',
            name: 'priority',
            message: 'Select task priority:',
            choices: ['Low', 'Medium', 'High']
        },
        {
            type: 'list',
            name: 'status',
            message: 'Select task status:',
            choices: ['Todo', 'InProgress', 'Completed']
        }
    ]);
    taskManager.addTask(task);
    console.log('Task added successfully!');
}
async function completeTask() {
    const tasks = taskManager.getAllTasks();
    if (tasks.length === 0) {
        console.log('No tasks available.');
        return;
    }
    const { taskId } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'taskId',
        message: 'Select a task to complete:',
        choices: tasks.map(task => ({ name: task.title, value: task.id }))
    });
    taskManager.completeTask(taskId);
}
async function updateTaskStatus() {
    const tasks = taskManager.getAllTasks();
    if (tasks.length === 0) {
        console.log('No tasks available.');
        return;
    }
    const { taskId } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'taskId',
        message: 'Select a task to update:',
        choices: tasks.map(task => ({ name: task.title, value: task.id }))
    });
    const { newStatus } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'newStatus',
        message: 'Select new status:',
        choices: ['Todo', 'InProgress', 'Completed']
    });
    taskManager.updateTaskStatus(taskId, newStatus);
}
function viewAllTasks() {
    const tasks = taskManager.getAllTasks();
    console.table(tasks);
}
function deleteAllTasks() {
    taskManager.deleteAllTasks();
}
async function deleteTaskById() {
    const tasks = taskManager.getAllTasks();
    if (tasks.length === 0) {
        console.log('No tasks available.');
        return;
    }
    const { taskId } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'taskId',
        message: 'Select a task to delete:',
        choices: tasks.map(task => ({ name: task.title, value: task.id }))
    });
    taskManager.deleteTaskById(taskId);
}
async function deleteTaskByFilter() {
    const filterChoices = ['id', 'title', 'description', 'priority', 'status'];
    const { filterType } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'filterType',
        message: 'Select the filter type:',
        choices: filterChoices
    });
    let filterValue;
    if (filterType === 'id') {
        const { id } = await inquirer_1.default.prompt({
            type: 'input',
            name: 'id',
            message: 'Enter the task ID:',
            validate: (input) => !isNaN(parseInt(input)) || 'Please enter a valid number'
        });
        filterValue = parseInt(id);
    }
    else if (filterType === 'priority') {
        const { priority } = await inquirer_1.default.prompt({
            type: 'list',
            name: 'priority',
            message: 'Select priority:',
            choices: ['Low', 'Medium', 'High']
        });
        filterValue = priority;
    }
    else if (filterType === 'status') {
        const { status } = await inquirer_1.default.prompt({
            type: 'list',
            name: 'status',
            message: 'Select status:',
            choices: ['Todo', 'InProgress', 'Completed']
        });
        filterValue = status;
    }
    else {
        const { value } = await inquirer_1.default.prompt({
            type: 'input',
            name: 'value',
            message: `Enter the ${filterType}:`
        });
        filterValue = value;
    }
    const filter = { [filterType]: filterValue };
    taskManager.deleteTaskByFilter(filter);
}
async function viewTasksByPriority() {
    const { priority } = await inquirer_1.default.prompt({
        type: 'list',
        name: 'priority',
        message: 'Select priority:',
        choices: ['Low', 'Medium', 'High']
    });
    const tasks = taskManager.getTasksByPriority(priority);
    console.table(tasks);
}
console.log('Welcome to the Task Manager CLI!');
mainMenu();
