// Your code here
const reverseString = require("../problems/reverse-string")
const chai = require("chai")
const expect = chai.expect

describe("reverseString", () => {
    it("should return string reversed", () => {
        expect(reverseString("fun")).to.equal("nuf")
    })
})


