function star(num) {
    let pattern = "";
    for (let i = 0; i < num; i++) {
      pattern = pattern + "*";
      console.log(pattern);
    }
  }
  
  star(15);