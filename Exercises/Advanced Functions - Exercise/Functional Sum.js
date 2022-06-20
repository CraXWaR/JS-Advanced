function add(n) {
    const inn = function (a) {
        n += a;
        return inn;
    };
    inn.valueOf = function () {
        return n;
    }
    return inn;
}
add(1)
add(1)(6)(-3)
