// Напишите бесконечный цикл, который прерывается при помощи команды break, 
// когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.
// let numberOfIterations = 0;

while (true) {
    let inf_cycle = Math.random();

    numberOfIterations++;

    if (inf_cycle > 0.9) {
        console.log(`r: ${inf_cycle}, iter: ${numberOfIterations}`);

        break;
    }
}