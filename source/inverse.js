'use strict';

const inverse = (array, stat = 0) => {
    if (!(Array.isArray(array) && Number.isInteger(stat))) {
        throw new Error("Please, try with correct data: Array (and maybe Number)");
    }
    let [array1, array2] = [array.slice(0, stat), array.slice(stat, array.length)];

    return stat >= 0 ? array1.concat(array2.reverse()) : array1.reverse().concat(array2);
};
