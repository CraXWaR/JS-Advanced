function solve(input) {
    let cars = {};
 
    for (let line of input) {
        let [command, name, prop, inheritFrom] = line.split(' ');
        if (command == 'create') {
            cars[name] = {};
            if (prop == 'inherit') {
                cars[name] = Object.create(cars[inheritFrom]);
            }
        } else if (command == 'set') {
            cars[name][prop] = inheritFrom;
        } else if (command == 'print') {
            let props = [];
            let obj = cars[name];
            do {
                Object.entries(obj).forEach((prop) => { props.push(prop) });
            } while (obj = Object.getPrototypeOf(obj));
 
            console.log(props.map(e => e[0] + ':' + e[1]).join(','));
        }
    }
}
solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])