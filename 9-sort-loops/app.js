function sort(array) {
    let newArray = array.slice();
    let n = newArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }
    return newArray;
}

let numbers = [1, 40, -5, 10, 0];
let sortedNumbers = sort(numbers);
console.log('Исходный массив', numbers);
console.log('Массив отсортированный по возрастанию', sortedNumbers);
console.log('Массив отсортированный по убыванию', sortedNumbers.slice().reverse());


