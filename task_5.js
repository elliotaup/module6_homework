const numPow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
    
  };
  
  console.log(numPow(2,2));
  console.log(numPow(10,2));
  console.log(numPow(5,5));