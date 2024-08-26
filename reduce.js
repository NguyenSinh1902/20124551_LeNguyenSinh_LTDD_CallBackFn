const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

//Hàm reduce là hàm callback cho phép gộp, tích luỹ các phần tử trong mảng thành một giá trị duy nhất.
