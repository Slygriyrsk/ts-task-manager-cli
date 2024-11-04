import { Task, TaskPriority, TaskStatus } from "./types";

export class TaskManager {
    private tasks: Task[] = []; // this is generics

    //`Omit` utility type in the `addTask` method to create a new type without the `id` property
    addTask(task: Omit<Task, 'id'>): void {
        // after which element we are including the tasks to it if task =[] is empty then the task id is 1
        const id = this.tasks.length + 1;
        //...task takes all properties from the task object and copies them into a new object
        let data = {...task, id}; //with all the properties from the task with a newly generated id
        this.tasks.push(data);
        // another way to write this.tasks = [...this.tasks, {...task, id}];
    }

    completeTask(id: number): void {
        // search for the task for which we need to show the status
        const task = this.tasks.find(t => t.id === id);
        if(task) {
            if(task.status === 'Completed') {
                console.log("Task is already completed");
            } else {
                console.log(`Task status changed from ${task.status} to Completed`);
                // after that task completed so set the status
                task.status = 'Completed';
            }
        } else {
            console.log("Task is not found");
        }
    }

    updateTaskStatus(id: number, newStatus: TaskStatus): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            console.log(`Task status changed from ${task.status} to ${newStatus}`);
            task.status = newStatus;
        } else {
            console.log("Task is not found");
        }
    }

    getTasksByPriority(priority: TaskPriority): Task[] {
        return this.tasks.filter(task => task.priority === priority);
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    deleteAllTasks(): void {
        this.tasks = [];
        console.log("All tasks have been deleted");
    }

    deleteTaskById(id: number): void {
        // get the initial no of task before deletion
        const initialLen = this.tasks.length;

        //get the task to be deleted
        this.tasks = this.tasks.filter(t => t.id !== id);

        // delete if it is there by comparing the lengths
        if(this.tasks.length < initialLen) {
            console.log(`Task with id ${id} has been deleted`);
        }else {
            console.log(`The Task with the given id ${id} doesnot exists`);
        }
    }

    // here we can filter the task by any property like id, status, priority, description and title to be delted
    // partial we use because to access only some of the properties of Task interface
    deleteTaskByFilter(filter: Partial<Task>): void {   
        // initial length of the task
        const initialLen = this.tasks.length;

        this.tasks = this.tasks.filter(task => {
            return !Object.keys(filter).every(key => {
                // verify that every key in an object meets a certain condition that it satisfies all the conditions
                return filter[key as keyof Task] === task[key as keyof Task]; // this is the syntax to check it if the filter matches the task
            });
        });

        const deletedTask = initialLen - this.tasks.length;
        if(deletedTask > 0) {
            console.log(`${deletedTask} has been deleted from the task`);
        }else {
            console.log('Didnot match the params to delete the task');
        }
    }
}