let addressLat = 20;
let addressLong = 30;
let positionLat = 40;
let positionLong = 2;
const answer = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(answer);