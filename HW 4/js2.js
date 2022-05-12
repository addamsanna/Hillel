// Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

function min() {
    if (arguments.length === 0) {
        console.log("No data");
    } else {
        let result = arguments[0];

        for (let i = 0; i < arguments.length; i++) {
            if (result > arguments[i]) {
                result = arguments[i]
            }
        }

        return result;
    }
}

console.log(min()); 