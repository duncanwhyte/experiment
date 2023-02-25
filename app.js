const array = [1, 5, 10, 10, 10, 13];

function uniqueVals(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
}

uniqueVals(array);
