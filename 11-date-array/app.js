const date = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function stringToArray(date) {
    let res = [];

    for (el of date) {
        let day, month, year;

        if (el.includes('-')) {
            [day, month, year] = el.split('-')
        } else if (el.includes('/')) {
            [month, day, year] = el.split('/')
        }

        if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
            res.push([day, month, year]);
        }
    }
    return res;
}

function fn(date) {
    let res = [];
    for (el of date) {
        if (el[1] === '02') {
            if ((el[2] % 4 === 0 && el[2] % 100 !== 0) || (el[2] % 400 === 0)) {
                if (el[0] <= 29) {
                    res.push(el.join('-'));
                }
            } else if (el[0] <= 28) {
                res.push(el.join('-'));
            }
        } else if (el[1] == '04' || '06' || '09' || '11') {
            if (el[0] <= 30) {
                res.push(el.join('-'));
            }
        } else {
            res.push(el.join('-'));
        }
    }
    return res;
}

function getDates(array) {
    return fn(stringToArray(array));
}

console.log(getDates(date));














