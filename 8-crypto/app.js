function crypto(userPassword) {
    const cryptoPassword = userPassword.split('');
    cryptoPassword.push(cryptoPassword[0]);
    cryptoPassword.splice(0, 1);
    cryptoPassword.push(1);
    cryptoPassword.push(cryptoPassword[2]);
    cryptoPassword.splice(2, 3);
    cryptoPassword.unshift(2);
    newPassword = cryptoPassword.join('');
    return newPassword;
}

function check(newPassword, userPassword) {
    if (crypto(userPassword) === newPassword) {
        console.log('Пароль верный');
    } else {
        console.log('Пароль неверный');
    }
}

check('2asrdp1s', 'password');


