const multiply = (a, b) => {
    if (typeof b === 'undefined') {
      return a * 2; 
    } else {
      return a * b;
    }
  };
  console.log(multiply(3));    
  console.log(multiply(2, 4)); 
  