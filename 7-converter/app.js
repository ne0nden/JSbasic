function exchange(sum, sourceСurrency, targetCurrency) {
    const USD = 88;
    const EUR = 94;
    function exchangeToRUB(sum, sourceСurrency) {
        switch (sourceСurrency) {
            case 'USD':
                return sum * USD;
                break;
            case 'EUR':
                return sum * EUR;
                break;
            case 'RUB':
                return sum;
                break;
            default:
                return null;
        }
    }

    switch (targetCurrency) {
        case 'USD':
            return exchangeToRUB(sum, sourceСurrency) / USD;
            break;
        case 'EUR':
            return exchangeToRUB(sum, sourceСurrency) / EUR;
            break;
        case 'RUB':
            return exchangeToRUB(sum, sourceСurrency);
            break;
    }
}
console.log(exchange(100, 'RUB', 'EUR'));




