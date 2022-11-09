function square(num) {
  const digitsArrays = num.toString().split("");
  const squareArray = digitsArrays.map((digit) => Number(digit) ** 2).join("");
  return Number(squareArray);
  // let resultado = "";

  // for (let i = 0; i < str.length; i++) {
  //   resultado += Math.pow(Number(str[i]), 2).toString();
  // }
  // return Number(resultado);
}

console.log(square(3514));
console.log(square(994571));
console.log(square(24));
console.log(square(745821698));
