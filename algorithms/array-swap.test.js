const expect = require("chai").expect,
    swapArrayItems = require("./array-swap.js");

describe("Array Swap", () => {

    it("should swap items within an array if their indices are provided", () => {

        let numbers = [1, 2, 3, 4];
        swapArrayItems(numbers, 0, 3);
        expect(numbers).to.be.eql([4, 2, 3, 1]);
    });
});




