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

module.exports = swapArrayItems;