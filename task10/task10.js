/*Реализуйте функцию oddity(arr)*/
const oditty = a => a.sort((a, b) => b % 2 ? 1 : -1);
console.log(oditty([3, 10, 2, 7])); //[7,3,10,2]