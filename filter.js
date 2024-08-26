const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

//Hàm filter là hàm tạo ra một mảng mới thoả điều kiện của callBack function.