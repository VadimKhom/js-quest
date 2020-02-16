/*Реализуйте функцию byDesc(arr)*/
const byDesc = arr => arr.sort((a, b) => b - a);
console.log(byDesc([3, 10, 2, 7])); //[10,7,3,2]