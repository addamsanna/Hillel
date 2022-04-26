// Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
//  Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
let busNumber = +prompt("Enter bus number", "");
if (busNumber === 7 || busNumber === 225 || busNumber === 255) {
    alert("Go home, honey")
} else {
    alert("Wait, please")
};