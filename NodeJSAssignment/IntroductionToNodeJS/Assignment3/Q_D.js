const daysTill = require('./daysTill')
const currentDate = new Date();
const birthDay = new Date(`December 31, ${currentDate.getFullYear()}`) //dummy birthday

try{
    daysTill.daysTillChristmas(currentDate);
    daysTill.daysTillMothersDay(currentDate);
    daysTill.daysTillBirthday(currentDate, birthDay);
} catch (err) {
    console.log(err.message);
}
