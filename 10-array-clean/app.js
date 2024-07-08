function clean(a) {
    return function (array) {
        let newArray = array.slice();
        for (let i = newArray.length - 1; i >= 0; i--) {
            if (newArray[i] > a) {
                newArray.splice(i, 1);
            }
        }
        return newArray;
    }
}

const arr = [3, 6, 9, 2, 12];

const abc1 = clean(3);
const abc2 = clean(5);
const abc3 = clean(8);

const arrClean1 = abc1(arr);
const arrClean2 = abc2(arr);
const arrClean3 = abc3(arr);

console.log(arrClean1);
console.log(arrClean2);
console.log(arrClean3);



