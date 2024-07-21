'use strict';

const taskManager = {
    toDoList: [
        {
            title: 'Помыть посуду',
            description: 'Вечером я должен помыть посуду',
            id: 1,
            priority: 1
        }
    ],
    addTask: function (title, priority, description) {
        let nextId = 1;
        if (this.toDoList.length > 0) {
            let maxId = 0;
            for (let task of this.toDoList) {
                if (task.id > maxId) {
                    maxId = task.id;
                }
            }
            nextId = maxId + 1;
        }

        const newTask = {
            title: title,
            description: description,
            id: nextId,
            priority: priority
        };
        this.toDoList.push(newTask);
    },

    deleteTask: function (id) {
        const index = this.toDoList.findIndex(task => task.id === id);
        if (index != -1) {
            this.toDoList.splice(index, 1);
        } else {
            console.log('Задача не может быть выполнена');
        }
    },

    updateTask: function (id, newTitle, newPriority, newDescription) {
        const index = this.toDoList.findIndex(task => task.id === id);
        if (index !== -1) {
            if (newTitle !== undefined) {
                this.toDoList[index].title = newTitle;
            }
            if (newPriority !== undefined) {
                this.toDoList[index].priority = newPriority;
            }
            if (newDescription !== undefined) {
                this.toDoList[index].description = newDescription;
            }
        } else {
            console.log('Задача не может быть выполнена');
        }
    },

    sortTasks: function (by, ascending) {
        if ((by === 'priority' || by === 'id') && (ascending === true || ascending === false)) {
            this.toDoList.sort((a, b) => {
                if (ascending) {
                    return a[by] - b[by];
                } else {
                    return b[by] - a[by];
                }
            });
        } else {
            console.log('Задача не может быть выполнена');
        }
    }
};

const newTask = {
    toDoList: []
};

const addTaskToNewTask = taskManager.addTask.bind(newTask);
const deleteTaskFromNewTask = taskManager.deleteTask.bind(newTask);
const updateTaskInNewTask = taskManager.updateTask.bind(newTask);
const sortTasksInNewTask = taskManager.sortTasks.bind(newTask);

console.log(newTask.toDoList);
