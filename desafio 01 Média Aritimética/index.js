// Com Reduce
function media(numbers) {
  let total = numbers.reduce((accum, number) => {
    return accum + number;
  }, 0);

  return total / numbers.length;
}

// Método Simples

// function media(numbers) {
//   let total = 0;
//   numbers.forEach((number) => {
//     total += number;
//     return total;
//   });

//   const media = total / numbers.length;

//   return media;
// }

console.log(media([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(media([2, 5, 7, 1, -2]));
console.log(media([10, 10, 10, 10, 9]));
console.log(media([25, 75]));
