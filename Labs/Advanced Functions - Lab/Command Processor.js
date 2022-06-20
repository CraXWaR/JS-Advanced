function solve() {
    let result = ''
    return {
        append(string){
            result += string
        },
        removeStart(z){
            result = result.substring(z)
        },
        removeEnd(y){
            result = result.substring(0, result.length - y)
        },
        print(){
            console.log(result);
        }
    }
}
let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();