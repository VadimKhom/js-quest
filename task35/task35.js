/* Создайте функцию nextNumber(arr,n), которая принимает массив arr и необязательный  параметр n c номером первого элемента, который должен быть возвращен возвращаемой функцией.
Например, вызов функции 
const test = nextNumber([1, 2, 3]);
test(); //1
test(); //2
test(); //3
test(); //1 
...*/

const nextNumber = (arr, n = 0) => () => {
    let res = arr[(n = n % arr.length)];
    n++;
    return res;
};
const test = nextNumber([1, 2, 3]);
console.log(test()); //1
console.log(test()); //2
console.log(test()); //3
console.log(test()); //1
console.clear();
const test2 = nextNumber([1, 2, 3], 2);
console.log(test2()); //3
console.log(test2()); //1
console.log(test2()); //2
console.log(test2()); //3