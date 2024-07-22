'use strict';

const taskManager = {
    toDoList: [],

    addTask: function (data) {
        const nextId = this.toDoList.reduce((maxId, { id }) => id + 1 > maxId ? id + 1 : maxId, 1);
        data.id = nextId;
        if (!data) {
            console.log('Данные не переданы');
            return false;
        }
        if (typeof data !== 'object' || Array.isArray(data)) {
            console.log('Переданные данные не являются объектом');
            return false;
        }
        this.toDoList.push({ ...data, id: data.id });
        return this;
    },

    deleteTask: function (data) {
        const task = this.toDoList.find(task => task.id === data.id);
        if (!task) {
            console.log('Задача с указанным ID не найдена');
            return this;
        }
        this.toDoList = this.toDoList.filter(f => f.id !== data.id);
        data.id = -1;
        return this;
    },


    updateTask: function (data, newTitle, newPriority, newDescription) {
        const index = this.toDoList.findIndex(task => task.id === data.id);
        if (index !== -1) {
            if (newTitle) {
                this.toDoList[index].title = newTitle;
            }
            if (newPriority) {
                this.toDoList[index].priority = newPriority;
            }
            if (newDescription) {
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

const data1 = {
    title: '123',
    description: 'abc',
    priority: 1
}

const data2 = {
    title: '890',
    description: 'bbb',
    priority: 3
}

addTaskToNewTask(data1);
deleteTaskFromNewTask(data1);
addTaskToNewTask(data2);
addTaskToNewTask(data1);
updateTaskInNewTask(data1, '456', 5, 'aaa');
sortTasksInNewTask('priority', true);

console.log(newTask.toDoList);


