// Напишите функцию аналог метода Object.assign().
//  Первый параметр функции - целевой объект, поля
//   которого будут изменены или расширены. Остальные 
//   параметры - объекты-источники, полями которых 
//   будет расширяться целевой объект.

let source = { firstname: 'Tom', age: 10 }

function newKey(...elements) {
    let firstElement = elements[0];
    for (let i = 1; i < elements.length; i++) {
        let el = elements[i]
        for (let key in el) {
            firstElement[key] = el[key];
        }
    }
    return firstElement;
}
console.log(JSON.stringify(newKey(source, { color: "black" }, { bla: "blabla" })));