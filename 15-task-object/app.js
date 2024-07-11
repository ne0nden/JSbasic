'use strict'

const toDoList = [
    {
        title: 'Помыть посуду',
        id: 1,
        priority: 1,
    },
];

function addTask(title, priority) {
    let nextId = 1;
    if (toDoList.length > 0) {
        let maxId = 0;
        for (let task of toDoList) {
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
    toDoList.push(newTask);
};

function deliteTask(id) {
    const index = toDoList.findIndex(task => task.id === id);
    console.log(index);
    if (index != -1) {
        toDoList.splice(index, 1);
    } else {
        console.log('Задача не может быть выполнена');
    }
};

function updateTask(id, newTitle, newPriority) {
    const index = toDoList.findIndex(task => task.id === id);
    if (index !== -1) {
        if (newTitle !== undefined) {
            toDoList[index].title = newTitle;
        };
        if (newPriority !== undefined) {
            toDoList[index].priority = newPriority;
        };
    } else {
        console.log('Задача не может быть выполнена');
    };
};


function sortTasks(by, ascending) {
    if (by === 'priority' || 'id' && ascending === 'true' || 'false') {
        toDoList.sort((a, b) => {
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
};

console.log(toDoList);