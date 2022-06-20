function extendPrototype(classToExtend) {
    // TODO:
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`
    }
}

// extendPrototype(Person);
// let t = new Person("Posho", "imail@hit.bg");
// console.log(t.toString());
// console.log(t.species);
// console.log(t.toSpeciesString());