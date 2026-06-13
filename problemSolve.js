function swap(a,b) {
    [a, b] = [b, a];
    return [a, b];
}

let result = swap(5, 10);
console.log(result);