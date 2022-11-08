function reverse(arr) {
  const reverseArray = [];

  for (let i = 0; i < arr.length; i++)
    [(reverseArray[i] = arr[arr.length - 1 - i])];

  return reverseArray;
}

reverse([0, 9, 6, 8, 9, 1, 5, 7]);
reverse(["Oh", "Hi", "Mark"]);
reverse([false, true, true, true]);
reverse(["It`s", "not", true, 0]);
