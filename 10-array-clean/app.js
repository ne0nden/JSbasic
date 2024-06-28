function clean(a) {
    return function (array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] > a) {
                array.splice(i, 1);
            }
        }
        return array;
    }
}

let abc = clean(5);
console.log(abc([3, 6, 9, 2]));
