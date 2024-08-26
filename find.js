const numbers = [1, 3, 5, 7, 8];

const firstEven = numbers.find(function(num) {
    return num % 2 === 0;
});

console.log(firstEven);

// Hàm find là hàm trả về phần tử đầu tiên trong mảng thoả điều kiện callBack, nếu không có phần tủ nào thoả thì trả về "undefined" 
