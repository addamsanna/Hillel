// Напишите функцию аналог метода массива shift. Функция удаляет из переданного
//  в параметре массива первый элемент.
let deleteFirstElement = [16, 1, 2, "three", 8];
let firstElement = deleteFirstElement[0];
let findElement = deleteFirstElement.find(item => item == firstElement);

if (findElement) {
    deleteFirstElement.forEach(function (item, i) {
        if (item == firstElement) {
            deleteFirstElement.splice(i, 1);
        }
    });
}
console.log(deleteFirstElement);