// Your code here
const Person = require("../problems/person")
const chai = require("chai")
const expect = chai.expect
// chai.use(spies);

describe("Person", () => {

    let person;
    beforeEach(() => {
        person1 = new Person ("Messi", 35)
        person2 = new Person ("Charles", 25)
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
})





//     describe("introduce instance method", () => {
//         it("should call the introduce method", () => {
//             person.introduce();
//             let expected = `Hi, I'm kristen chauncey, and I'm 38 years old.`;
//             expect(consoleSpy).to.have.been.called.once.with(expected)
//         });
//     });

//     describe("introducePeople static method", () => {
//         it("should call the introduce method on each instance", () => {
//             const person2 = new Person("jeff", "granoff", 30);
//             let introSpy = chai.spy.on(person, "introduce");
//             let introSpy2 = chai.spy.on(person2, "introduce");
//             Person.introducePeople([person, person2]);
//             expect(introSpy).to.have.been.called.once;
//             expect(introSpy2).to.have.been.called.once;
//         });

//         it("should throw an error if input is not an array", () => {
//             let input = "bad input";
//             Person.introducePeople(input);
//             expect(consoleSpy).to.have.been.called.once.with(
//                 "introducePeople only takes an array as an argument."
//             );
//         });

//         it('should throw an error if array does not contain instances of Person', () => {
//             let input = ['dog', person]
//             Person.introducePeople(input);
//             expect(consoleSpy).to.have.been.called.once.with(
//                 "All items in array must be Person class instances."
//             );
//         })
//     });
// });
