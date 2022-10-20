const chai = require("chai");
const expect = chai.expect;
const {reciprocal, returnsThree} = require("../problems/number-fun");

describe("returnThree", () => {
    it("Should return three", () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe("reciprocal", () => {
    context("Valid Arguments", () => {
    it("Should return reciprocal", () => {
        expect(reciprocal(5)).to.equal(1/5);
        expect(reciprocal(9876)).to.equal(1/9876);
    })
})

    context("Invalid Arguments", () => {
    it("Should throw error", () => {
        expect(() => reciprocal(-10)).to.throw(TypeError);
        expect(() => reciprocal(99999999)).to.throw(TypeError);
    })
    })
})
