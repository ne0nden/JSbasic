function crypto(userPassword) {
    const cryptoPassword = userPassword.split('');
    const mid = cryptoPassword.length / 2;
    let firstHalf, secondHalf, midHalf;

    if (cryptoPassword.length % 2 === 0) {
        firstHalf = cryptoPassword.slice(0, mid);
        secondHalf = cryptoPassword.slice(mid);
        midHalf = null;
    } else {
        firstHalf = cryptoPassword.slice(0, mid);
        secondHalf = cryptoPassword.slice(mid + 1);
        midHalf = cryptoPassword.slice(mid, mid + 1);
    }
    newPassword = (secondHalf.concat(midHalf, firstHalf)).join('');
    return newPassword;

}

function check(newPassword, userPassword) {
    if (crypto(userPassword) === newPassword) {
        console.log('Пароль верный');
    } else {
        console.log('Пароль неверный');
    }
}
check('wordpass', 'password');
