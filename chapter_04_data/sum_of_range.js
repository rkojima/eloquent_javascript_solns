function range(start, finish, step = 1) {
    let numArr = [];
    if (start <= finish) {
        for (let i = start; i <= finish; i += step) {
            numArr.push(i);
        }
    } else {
        for (let i = start; i >= finish; i += step) {
            numArr.push(i);
        }
    }
    return numArr;
}

function sum(arr) {
    let added = 0;
    arr.forEach((item) => {
        added += Number(item);
    });
    return added;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55