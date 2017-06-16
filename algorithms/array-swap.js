/* jshint esversion: 6, node: true */

function swapArrayItems(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = swapArrayItems;