// Напишите функцию max, которая сравнивает два числа и возвращает большее: 

function max(num1, num2) {
    if (num1 > num2) {
        return (num1);
    } else {
        return (num2);
    }
}

console.log(max(2, 1));

//второй способ
function max2(numb1, numb2) {
    return Math.max(numb1, numb2);
}

console.log(max2(2, 1));


