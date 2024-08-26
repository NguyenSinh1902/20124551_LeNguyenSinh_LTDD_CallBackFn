const numbers = [4, 4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // [1, 2, 3, 4, 5]

//hàm sort là hàm sắp xếp thứ tự trong mảng (tăng dần).
// a-b âm thì a bé hơn b -> a đứng trước b
//a-b dương thì a lớn b -> a đứng sau b
//a-b=0 thì a bằng b -> giữ nguyên