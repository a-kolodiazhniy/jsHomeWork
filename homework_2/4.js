const f = (num) => {
    if (typeof num !== 'number') throw new Error('Error: parameter type is not a Number');
    if (num < 1 || num > 7) throw new Error('Error: parameter should be in the range of 1 to 7');

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return days[num - 1];
}

console.log(f(1));
console.log(f(2));
//console.log(f(8));
console.log(f('1'));