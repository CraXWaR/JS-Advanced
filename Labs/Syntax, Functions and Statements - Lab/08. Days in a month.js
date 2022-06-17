function solve(month, year) {
    let day = new Date(year, month, 0).getDate();
    console.log(day);
}
solve(1, 2012)