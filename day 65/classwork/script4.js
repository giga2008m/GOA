function filter(numbers) {
  let filteredArr = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      filteredArr.push(numbers[i]);
    }
  }
  
  return filteredArr;
}


