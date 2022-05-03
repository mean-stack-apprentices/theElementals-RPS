function randomPin() {
    const length = 4;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function getUniqueGamePin(pool, pin) {
    if (pool[pin]) {
        return getUniqueGamePin(pool, randomPin());
    }
    else {
        return pin;
    }
}
export { randomPin, getUniqueGamePin };
//# sourceMappingURL=socket.helper.js.map