// Your code here
const Person = require("../problems/person")
const chai = require("chai")
const expect = chai.expect
// chai.use(spies);

describe("Person", () => {

    let person1;
    let person2;
    let obj1;
    let obj2;
    let notObj;
    beforeEach(() => {
        person1 = new Person ("Messi", 35)
        person2 = new Person ("Charles", 25)
        obj1 = {name: "MJ", age: 50}
        obj2 = {};
        notObj = [1];
    });

    describe("Person constructor", () => {
        it("Should set the name property", () => {
            expect(person1).to.have.property("name");
            expect(person1.name).to.eql("Messi")
        })

        it("Should set the age property", () => {
            expect(person1).to.have.property("age");
            expect(person1.age).to.eql(35)
        })
    })

    describe("sayHello Instance", () => {
        it("Should return string saying hello", () => {
            expect(person1.sayHello()).to.equal(`Hello there, i'm ${person1.name}`)
        })
    })

    describe("Visit", () => {
        it("Should return visit message", ()=> {
            expect(person1.visit(person2)).to.equal(`${person1.name} visited ${person2.name}`)
        })
    })

    describe("Switch Visit", () => {
        it("Should return switchVisit message", () => {
            expect(person1.switchVisit(person2)).to.equal(`${person2.name} visited ${person1.name}`)
        })
    })
    describe("update instance", () => {
        context("is object", () => {
            it("should update properties", () => {
                person1.update(obj1);
                expect(person1.name).to.eql("MJ");
                expect(person1.age).to.eql(50);
            })
            it("No name and age throws TypeError", () => {
                expect(() => person1.update(obj2)).to.throw(TypeError);
            })
        })
        context("is not object", () => {
            it("Should throw error", () => {
            expect(() => person1.update(notObj)).to.throw(TypeError);
        })
    })
    describe("try update", () => {
        context("if update is successful", () => {
            it("should return true", () => {
                expect(person1.tryUpdate(obj1)).to.equal(true);
            })
        })
        context("if update is unsuccessful", () => {
            it("should return false", () => {
                expect(person1.tryUpdate(obj2)).to.equal(false);
                // expect(person1.tryUpdate(notObj)).to.equal(false);
    })
})
})
    })
})
