'use strict';

/**
 * The "inverse" function reverses the order of the elements in an array.
 * If a number is passed to the function as the second argument,
 * then all the elements of the array are rearranged except for the first few
 * (the number depends on the number).
 * If the number is negative, then the elements at the end of the array remain in place
 *
 * @param {Array} array - An array of elements (won`t change)
 * @param {number} stat - A number of elements to skip. If the number is negative,
 * then the elements at the end of the array remain in place.
 * @return {Array} inversed array
 *
 * @author Katnov Artem
 */
const inverse = (array, stat = 0) => {
    if (!(Array.isArray(array) && Number.isInteger(stat))) {
        throw new Error("Please, try with correct data: Array (and maybe Number)");
    }
    const array1 = array.slice(0, stat);
    const array2 = array.slice(stat, array.length);

    return stat >= 0 ? array1.concat(array2.reverse()) : array1.reverse().concat(array2);
};
