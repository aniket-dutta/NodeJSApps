const div = 86400000;
const currentDate = new Date(); 
const christmasDate = new Date(`December 25, ${currentDate.getFullYear()}`)
const mothersDay = new Date(`May 9, ${currentDate.getFullYear()}`)

const christmasDateNextYear = new Date(`December 25, ${currentDate.getFullYear() + 1}`)
const mothersDayNextYear = new Date(`May 9, ${currentDate.getFullYear() + 1}`)
console.log(christmasDateNextYear);

const daysTillChristmas = (inputDate)=> {
    if(inputDate<christmasDate){
        let days = Math.ceil(Math.abs(christmasDate - inputDate) / div);
        console.log(`Christmas is ${days} days away `);       
    }else{
        let days = Math.ceil(Math.abs(christmasDateNextYear - inputDate) / div);
        console.log(`Next Year's Christmas is ${days} days away `);   
    }
}

const daysTillMothersDay = (inputDate)=> {
    if(inputDate<mothersDay){
        let days = Math.ceil(Math.abs(mothersDay - inputDate) / div);
        console.log(`Mother's Day is ${days} days away `);  
    }else{
        let days = Math.ceil(Math.abs(mothersDayNextYear - inputDate) / div);
        console.log(`Next Year's Mother's Day is ${days} days away `);  
    }
}
const daysTillBirthday = (inputDate, birthday)=> {
    if(inputDate<christmasDate){
        let days = Math.ceil(Math.abs(birthday - inputDate) / div);
        console.log(`Birthday is ${days} days away `);  
    }else{
        let days = Math.ceil(Math.abs(inputDate - birthday) / div);
        console.log(`Next Year's Birthday is ${days} days away `);  
    }
}

module.exports = {

    daysTillChristmas : daysTillChristmas,
    daysTillMothersDay : daysTillMothersDay,
    daysTillBirthday : daysTillBirthday

}


