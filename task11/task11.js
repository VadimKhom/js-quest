/*Реализуйте функцию byLength(str)*/
const byLength = s => s.sort((a, b) => b.Length - a.Length);
const arr = byLength(['колхоз', 'гладиолус', 'вода', 'книга']);
console.log(arr);
//