const numbers = [1, 3, 5, 7, 8];

const hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log(hasEven); // true

//Hàm some là hàm kiểm tra xem có ít nhất một phần tử trong mãng có thoả hay không.