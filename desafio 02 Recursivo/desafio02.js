function chunks(num) {
  if (num === 0) {
    return "";
  }

  if (num === 1) {
    return "chunk";
  } else {
    return "chunk-" + chunks(num - 1);
  }
}


// REFATORADO!!

// function recursiveChunks(num) {
//   if (num === 0) return ""
//   return num === 1 ? "chunk" : "chunk-" + recursiveChunks(num - 1) 
// }

console.log(chunks(4));
console.log(chunks(6));
console.log(chunks(2));
console.log(chunks(3));
console.log(chunks(1));
