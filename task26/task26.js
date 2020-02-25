/*Реализуйте тело функцию sequence(numArr) так, чтобы она возвращала другую функцию, возвращающую поочередно элементы массива numArr. Например, первый вызов some()
 let some = sequence([10,5,2,1]);
 some();
 должен вернуть 10, потом 5 и так далее.*/
const sequence = numArr => {
    let i = 0;
    return () => numArr[i++];
};
let some = sequence([10, 5, 2, 1]);
console.log(some()); //10
console.log(some()); //5
console.log(some()); //2
console.log(some()); //1
console.log(some()); //undefined