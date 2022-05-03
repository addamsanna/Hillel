// Создайте ассоциативный массив person, описывающий персону,
//  с произвольным количеством произвольных полей. С помощью
//   оператора in или typeof проверьте наличие в объекте свойства, 
//   прочитанного из prompt, и выведите его на экран. Если свойства нет,
//    то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = { name: 'Nastia', country: 'Ukraine' };
let propertyPerson = prompt("Enter property");
if (propertyPerson in person) {
    alert(person[propertyPerson]);
} else {
    person[propertyPerson] = prompt('This property does not exist. Enter property' + propertyPerson);
    alert('Property ' + propertyPerson + ' is enter ' + person[propertyPerson]);
}