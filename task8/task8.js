/*Реализуйте функцию directionByKeyCode(keyCode)*/
const directionByKeyCode = keyCode => ({
    '87': 'вверх ',
    '65': 'влево ',
    '68': 'вправо ',
    '83': 'вниз ',
})[keyCode];
console.log(directionByKeyCode(87)); // вверх