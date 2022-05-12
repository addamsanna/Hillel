// Напишите функцию аналог метода массива push. Функция 
// добавляет в конец переданного в параметре массив 
// произвольное количество элементов.


let pushElement = [2, "name", 10, "Anastasiia"];

function pushInArray(...newElements) {
    let firstElement = newElements[0];
    newElements.shift();
    return firstElement.concat(newElements);
}

pushElement = pushInArray(pushElement, "Blablabla", 27);
console.log(pushElement);