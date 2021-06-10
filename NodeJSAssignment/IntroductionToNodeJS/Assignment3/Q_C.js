const fs = require('fs');
const date_future_year = new Date('August 4, 21'); 
const date_now_year = new Date('August 4, 20');
const date_future_century = new Date('August 4, 2120'); 
const date_now_century = new Date('August 4, 2020');

let seconds_in_year = Math.abs(date_future_year - date_now_year) / 1000;
console.log(seconds_in_year);

let seconds_in_century = Math.abs(date_future_century - date_now_century) / 1000;
console.log(seconds_in_century);

fs.writeFile(
    'Seconds.txt',
    `Seconds in the coming year : ${seconds_in_year} \nSeconds in the coming century : ${seconds_in_century}`,
    () => console.log("File Write Complete")
)
