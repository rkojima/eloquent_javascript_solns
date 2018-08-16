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

// Building up an array is most easily done by first initializing a binding to[](a fresh, empty array) and repeatedly calling its push method to add a value.Don’t forget to return the array at the end of the function.

// Since the end boundary is inclusive, you’ll need to use the <= operator rather than < to check for the end of your loop.

// The step parameter can be an optional parameter that defaults(using the = operator) to 1.

// Having range understand negative step values is probably best done by writing two separate loops—one for counting up and one for counting down—because the comparison that checks whether the loop is finished needs to be >= rather than <= when counting downward.

// It might also be worthwhile to use a different default step, namely, -1, when the end of the range is smaller than the start.That way, range(5, 2) returns something meaningful, rather than getting stuck in an infinite loop.It is possible to refer to previous parameters in the default value of a parameter.

