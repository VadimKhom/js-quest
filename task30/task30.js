/*Напишите функцию validPhone(phone), которая на вход  принимает строку  с номером телефона, а возвращает  строку типа "+XXXXXXXXXXX", где Х- любое целое от 0 до 9. Причем, на месте  пустых "вводов" должны присутствовать символы подчеркивания "_". При задании некорректного символа, функция должна вернуть false.
Например, вызов validPhone("+7495") должен вернуть "+7495_______" */
const validPhone = phone => {
    if (!/^\+\d{0,11}$/.test(phone)) return false;
    let res = "+___________".split("");
    res.splice(0, phone.length, phone);
    return res.join("");
};
console.log(validPhone("+7945"));
console.log(validPhone("+79452323216"));