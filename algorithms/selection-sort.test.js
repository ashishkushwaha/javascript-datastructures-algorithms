const expect = require("chai").expect,
    selectionSort = require("./selection-sort");

describe("Selection sort", () => {

    function generateArrayOfRandoms(config) {

        let array = [],
            randomNumber = 0;
        config = config || {
            count: 100,
            min: -1000,
            max: 1000
        };

        for (let i = 0; i < config.count; i++) {
            randomNumber = (Math.random() * (config.max - config.min)) + (config.min + 1);
            array.push(Math.floor(randomNumber));
        }

        return array;
    }

    it("should work on empty array", () => {
        expect(selectionSort([])).to.be.eql([]);
    });

    it("should work on a sorted array", () => {
        expect(selectionSort([1, 2, 3, 4, 5])).to.be.eql([1, 2, 3, 4, 5]);
    });

    it("should work on an unsorted array", () => {
        expect(selectionSort([1, 3, 2, 4, -1, -50])).to.be.eql([-50, -1, 1, 2, 3, 4]);
    });

    it("should work on a random unsorted array", () => {

        let unsortedRandomArray = generateArrayOfRandoms();
        selectionSort(unsortedRandomArray);
        for (let i = 0; i < unsortedRandomArray.length - 1; i++) {
            expect(unsortedRandomArray[i] <= unsortedRandomArray[i + 1]).to.be.true;
        }
    });

});