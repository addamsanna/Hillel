// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// 	•	Добавьте в начало массива значение ‘Backbone.js’
// 	•	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// 	•	Добавьте в массив значение ‘CommonJS’ вторым элементом
// 	•	Найдите и удалите из массива значение ‘jQuery’,
//  выведите его в alert со словами “Это здесь лишнее”

let libraryArray = ['AngularJS', 'jQuery'];
libraryArray.unshift('Backbone.js');
libraryArray.push('ReactJS', 'Vue.js');
libraryArray.splice(2, 0, 'CommmonJS');
let findElementIndex = libraryArray.indexOf('jQuery');
let deleteElement = libraryArray[findElementIndex];
libraryArray.splice(findElementIndex, 1);
// alert(`Это здесь лишнее - ${deleteElement}`);
alert("Это здесь лишнее -" + deleteElement);