function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        console.log(Math.abs(a));
    }
}
gcd_rec(15, 5)