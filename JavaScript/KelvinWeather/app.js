//Forcast today in Kelvin
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Newton Today`);
//Forecast today in Celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Newton Today`);
//Forecast today in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Rounds down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Forecast today in Newton
let newton = celsius * (33/100);
//Rounds down the Newton temperature
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton Today`);