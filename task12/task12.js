/*Реализуйте функцию sortBy(userArray,prop)*/
const sortBy = (u, p) => u.sort((a, b) => b[p] < a[p]);
const users = [
    { name: 'Василий', lang: 'JavaScript', age: 23 },
    { name: 'Яна', lang: 'Java', age: 35 },
    { name: 'Олег', lang: 'Python', age: 19 },
    { name: 'Наталья', lang: 'C#', age: 20 },
    { name: 'Ольга', lang: 'PHP', age: 29 },
];
console.log(sortBy(users, "name"));