function solve(fruit, grams, kg) {
    let gramToKg = grams / 1000;
    let price = gramToKg * kg;
    console.log(`I need $${price.toFixed(2)} to buy ${gramToKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)