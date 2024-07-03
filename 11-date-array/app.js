const date = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

let res = [];
for (el of date) {
    if (el.indexOf('-') >= 0) {
        let arr2 = el.split('-');
        let days = arr2[0];
        let month = arr2[1];
        let year = arr2[2];
        let array2 = [days, month, year];
        if (days <= 31 && days >= 1 && month <= 12 && month >= 1) {
            res.push(array2.join('-'));
        }
    }
    if (el.indexOf('/') >= 0) {
        let arr = el.split('/');
        let days = arr[1];
        let month = arr[0];
        let year = arr[2];
        let array = [days, month, year];
        if (days <= 31 && days >= 1 && month <= 12 && month >= 1) {
            res.push(array.join('-'));
        }
    }
}

console.log(res);