const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100以上" : "100より小さい";
};

console.log(checkSum(1, 100));

//checkSum(100, -12)>100 ? console.log('100よりでかい'): console.log('100より小さい');
