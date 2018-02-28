class Person {
    constructor(value) {
        this.personId = value
        this.id = Symbol()
    }
}

export default Person