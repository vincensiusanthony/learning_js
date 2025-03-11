let date1 = new Date('2024-03-19');
let date2 = new Date('2024-03-21');
let difference_in_days = Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));
console.log(difference_in_days);