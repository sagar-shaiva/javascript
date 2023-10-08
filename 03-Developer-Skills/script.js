// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp < min) min = temps[i];
//     if (curTemp > max) max = temps[i];
//   }
//   console.log(min, max);
//   return max - min;
// };

// calcTempAmplitude([2, 3, 12, 3, 22, 76]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //  merge 2 arrays-------------

// const calcTempAmplitude2 = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp < min) min = temps[i];
//     if (curTemp > max) max = temps[i];
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitude2 = calcTempAmplitude2([1, 2, 3], [4, 5, 6]);
// console.log(amplitude2);

// const measurementKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',

//     // c) fix
//     value: 10,
//   };
//   const kelvin = measurement.value + 237;
//   return kelvin;
// };

// console.log(measurementKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
