// Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

while (true) {
    let signIn = confirm("Do you want to register?")
    if (signIn === true) {
        break;
    }
};
