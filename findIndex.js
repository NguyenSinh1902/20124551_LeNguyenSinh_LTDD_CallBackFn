const numbers = [5, 12, 8, 130, 44];

const index = numbers.findIndex(function(num) {
    return num > 10;
});

console.log(index); // 1 (vì số 12 là phần tử đầu tiên lớn hơn 10)


//Thay vì trả về phần tử đầu tiên, thì nó trả về index đầu tiên thoả đk
