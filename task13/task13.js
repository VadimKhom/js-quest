/*Реализуйте функцию sortEmail(arr)*/
const sortEmail = arr => (
    arr.sort((a, b) => a.slice(a.indexOf('@') + 1) > b.slice(b.indexOf('@') + 1) ? 1 : 0)
)
let check = ['m@bsite.loc', 'm@csite.loc', 'm@asite.loc'];
console.log(sortEmail(check));