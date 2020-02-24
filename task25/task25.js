/*Напишите функцию fibNthElement(n),которая получает целое число n, а возвращает n-ый елемент последовательности Фибоначчи(0,1,1,2,3...).
Например при вызове функция fibNthElement(4) должна вернуть 3*/
const fibNthElement = n => {
    const s = 5 ** 0.5; //Math.pow(5,.5);
    return Math.round((((1 + s) / 2) ** n - ((1 - s) / 2) ** n) / s);
};
console.log(fibNthElement(4)); //3
console.log(fibNthElement(7)); //13
console.log(fibNthElement(234)); //3.5778556625609034e+48