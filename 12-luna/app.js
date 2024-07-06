let card = '4561-2612-1234-5464';
function algorithmLuhn(card) {
    let res = 0;
    card = card.replaceAll('-', '');
    for (i = 0; i < card.length; i += 2) {
        l = card[i] * 2;
        if (l > 9) {
            l -= 9;
        }
        card = card.replace(card[i], l);
    }
    card = card.toString(10).split('').map(int => parseInt(int, 10));
    for (el in card) {
        res = res + card[el];
    }
    return res;
}
console.log(algorithmLuhn(card));