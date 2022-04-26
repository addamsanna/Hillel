// Получите из prompt значение для имени пользователя.
//  Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
for (let i = 0; i < 1; i++) {
    let namePerson = prompt("What is your name?", "");
    if (namePerson != null && namePerson != "") {
        alert(`Hello, ${namePerson}`)
    } else {
        i--;
    }
};