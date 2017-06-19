/**
 * Swaps 2 elements within an array, in place, given their index locations
 * @param {number[]} array - Array to swap items within 
 * @param {*} i - index of first element to swap
 * @param {*} j - index to second element to be swapped
 */
function swapArrayItems(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


/**
 * Sorts a given array, in place, using selection sort algorithm
 * @param {number[]} array - Array with randomly sorted numbers
 * @returns {number[]} - Returns the array which was sorted in place
 */
function selectionSort(array) {

    let min,
        indexOfMin;

    for (let i = 0; i < array.length; i++) {
        min = array[i];
        indexOfMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                indexOfMin = j;
            }
        }
        if (i !== indexOfMin) {
            swapArrayItems(array, i, indexOfMin);
        }
    }
   
    return array;
}


module.exports = selectionSort;