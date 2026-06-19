//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

const temps = [
    { value: day1TempF, unit: 'F'},
    { value: day2TempC, unit: 'C'},
    { value: day3TempF, unit: 'F'},
    { value: day4TempC, unit: 'C'},
    { value: day5TempF, unit: 'F'},
    { value: day6TempC, unit: 'C'},
    { value: day7TempF, unit: 'F'},
    { value: day8TempC, unit: 'C'},
    { value: day9TempF, unit: 'F'},
    { value: day10TempC, unit: 'C'},
    { value: day11TempF, unit: 'F'},
    { value: day12TempC, unit: 'C'},
    { value: day13TempF, unit: 'F'},
    { value: day14TempC, unit: 'C'},
    { value: day15TempF, unit: 'F'},
    { value: day16TempC, unit: 'C'},
    { value: day17TempF, unit: 'F'},
    { value: day18TempC, unit: 'C'},
    { value: day19TempF, unit: 'F'},
    { value: day20TempC, unit: 'C'},
    { value: day21TempF, unit: 'F'},
    { value: day22TempC, unit: 'C'},
    { value: day23TempF, unit: 'F'},
    { value: day24TempC, unit: 'C'},
    { value: day25TempF, unit: 'F'},
    { value: day26TempC, unit: 'C'},
    { value: day27TempF, unit: 'F'},
    { value: day28TempC, unit: 'C'},
    { value: day29TempF, unit: 'F'},
    { value: day30TempC, unit: 'C'},
];

temps.forEach(temp => {
    if (temp.unit === 'F') {
        tot_temperature_in_fahrenheit += temp.value;
        tot_temperature_in_celsius += (temp.value - 32) * 5 / 9;
    } else {
        tot_temperature_in_celsius += temp.value;
        tot_temperature_in_fahrenheit += (temp.value * 9 / 5) + 32;
    }
});

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};