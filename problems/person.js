class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    return `Hello there, i'm ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
  update(obj) {
    this.name = obj.name;
    this.age = obj.age;
    if(!obj.name || !obj.age){
      throw new TypeError
    }
    if(typeof obj !== "object"){
      throw new TypeError
    }
  }
  tryUpdate(obj) {
    if(this.update(obj) === TypeError){
      return false
    }else{
    return true
    }
  }
}

module.exports = Person;
