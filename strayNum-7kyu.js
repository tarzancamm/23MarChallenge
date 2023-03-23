const stray = (num) => {
  let filtered;

  if (num[0] === num[1]) {
    filtered = +num.filter((n) => n !== num[0]).join("");
  } else if (num[1] === num[2]) {
    filtered = num[0];
  } else {
    filtered = num[1];
  }

  return filtered;
};

console.log(stray([2, 1, 1]));
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
