function sort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let numbers = [1, 40, -5, 10, 0];
let sortedNumbers = sort(numbers);
console.log('Исходный массив', numbers);
console.log('Массив отсортированный по возрастанию', sortedNumbers);
console.log('Массив отсортированный по убыванию', sortedNumbers.reverse());


