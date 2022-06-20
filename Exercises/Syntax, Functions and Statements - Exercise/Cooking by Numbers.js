function coocking(num, c1, c2, c3, c4, c5) {
    let commands = [c1, c2, c3, c4, c5]

    let chop = x => x / 2
    let dice = x => Math.sqrt(x)
    let spice = x => ++x
    let bake = x => x * 3
    let fillet = x => x - x * 0.2

    for (let index = 0; index < commands.length; index++) {
        switch (commands[index]) {
            case 'chop':
                num = chop(num)
                console.log(num);
                break;
            case 'dice':
                num = dice(num)
                console.log(num);
                break;
            case 'spice':
                num = spice(num)
                console.log(num);
                break;
            case 'bake':
                num = bake(num)
                console.log(num);
                break;
            case 'fillet':
                num = fillet(num)
                console.log(num);
                break;
            default:
                break;
        }

    }
}
coocking('32', 'chop', 'chop', 'chop', 'chop', 'chop')