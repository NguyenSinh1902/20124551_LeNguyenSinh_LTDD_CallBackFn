const numbers = [2, 4, 6, 8];

const allEven = numbers.every(function(num) {
    return num % 2 === 0;
});

console.log(allEven);

//Hàm every kiễm tra TẤT CẢ các phần tử trong mảng có chia hết cho 2 hay không. trả về true hoặc false
