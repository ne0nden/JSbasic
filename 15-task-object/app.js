'use strict'

const taskManager = {
    toDoList: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        }
    ],
    addTask: function (title, priority) {
        let nextId = 1;
        if (this.toDoList.length > 0) {
            let maxId = 0;
            for (let task of this.toDoList) {
                if (task.id > maxId) {
                    maxId = task.id;
                }
            }
            nextId = maxId + 1;
        };

        const newTask = {
            title: title,
            id: nextId,
            priority: priority
        };
        this.toDoList.push(newTask);
    },

    deliteTask: function (id) {
        const index = this.toDoList.findIndex(task => task.id === id);
        if (index != -1) {
            this.toDoList.splice(index, 1);
        } else {
            console.log('Задача не может быть выполнена');
        }
    },

    updateTask: function (id, newTitle, newPriority) {
        const index = this.toDoList.findIndex(task => task.id === id);
        if (index !== -1) {
            if (newTitle !== undefined) {
                this.toDoList[index].title = newTitle;
            };
            if (newPriority !== undefined) {
                this.toDoList[index].priority = newPriority;
            };
        } else {
            console.log('Задача не может быть выполнена');
        };
    },

    sortTasks: function (by, ascending) {
        if (by === 'priority' || 'id' && ascending === 'true' || 'false') {
            this.toDoList.sort((a, b) => {
                if (ascending == true) {
                    return a[by] - b[by];
                } else {
                    return b[by] - a[by];
                };
            }
            );
        } else {
            console.log('Задача не может быть выполнена');
        };
    }
};

console.log(taskManager.toDoList);