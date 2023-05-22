import { multiplication } from "./calc.js";
import { addition } from "./calc.js";

function main() {
    
    // calling calc addition module
    let sum = addition(10, 20);
    console.log("SUM=", sum);

    // calling calc multiplication module
    let product = multiplication(10, 20);
    console.log("Product=", product);
  }
  
  main();
