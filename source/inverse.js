'use strict';

const inverse = (array, stat = 0) => {
    let staticArray;
    let dynamicArray;
    if (stat >= 0) {
        staticArray = array.slice(0, stat);
        dynamicArray = array.slice(stat, array.length);
    } else {
        staticArray = array.slice(stat, array.length);
        dynamicArray = array.slice(0, stat);
    }
    dynamicArray.reverse();

    return stat >= 0 ? staticArray.concat(dynamicArray) : dynamicArray.concat(staticArray);
};