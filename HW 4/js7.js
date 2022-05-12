// Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения 
//  - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции
// должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы
// некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр 
// не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст
// в формате: 
// 	<имя_автора>, <дата>
//  <текст_сообщения>

function setComment(date, message, author) {
    if (date && message) {
        if (!author) {
            author = "Anonymous";
        }
        console.log(author + ", " + date);
        console.log(message);
    } else {
        alert("Invalid input data");
    }

}

var enterDate = prompt("Enter your date", "");
var enterMessage = prompt("Enter your message", "");
var enterAuthor = prompt("Enter person", "");

setComment(enterDate, enterMessage, enterAuthor);