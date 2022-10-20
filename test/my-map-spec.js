// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies")
chai.use(spies)

const myMap = require("../problems/my-map");

describe("myMap", () => {
    let arr;
    let double;
    beforeEach(() => {
       arr = [1,2,3];
       double = function(num){
            return num * 2
        }
    })
    it("Should return new array", () => {
        expect(myMap(arr, double)).to.eql([2,4,6])
    })
    it("Should not mutate original array", ()=> {
        expect(arr).to.equal(arr)
    })
    it("should not call the built-in Array.map", function() {
            const mapSpy = chai.spy.on(arr, "map");
            myMap(arr, double);
            expect(mapSpy).to.have.not.been.called();
          });

    it('should use callback array.length times', () => {
        const spy = chai.spy(double)
        myMap(arr, spy)
        expect(spy).to.have.been.called.exactly(arr.length);
    })
})
