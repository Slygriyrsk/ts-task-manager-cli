"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = []; // this is generics
    }
    //`Omit` utility type in the `addTask` method to create a new type without the `id` property
    addTask(task) {
        // after which element we are including the tasks to it if task =[] is empty then the task id is 1
        const id = this.tasks.length + 1;
        //...task takes all properties from the task object and copies them into a new object
        let data = { ...task, id }; //with all the properties from the task with a newly generated id
        this.tasks.push(data);
        // another way to write this.tasks = [...this.tasks, {...task, id}];
    }
    completeTask(id) {
        // search for the task for which we need to show the status
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            if (task.status === 'Completed') {
                console.log("Task is already completed");
            }
            else {
                console.log(`Task status changed from ${task.status} to Completed`);
                // after that task completed so set the status
                task.status = 'Completed';
            }
        }
        else {
            console.log("Task is not found");
        }
    }
    updateTaskStatus(id, newStatus) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            console.log(`Task status changed from ${task.status} to ${newStatus}`);
            task.status = newStatus;
        }
        else {
            console.log("Task is not found");
        }
    }
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    getAllTasks() {
        return this.tasks;
    }
}
exports.TaskManager = TaskManager;
