
import { writeFileSync } from "node:fs"; 
import { readFileSync } from "node:fs"; 
export function write(){     
    let filepath = "C:\A PG-DAC\DAC\WBT\programs\day9\wpt2";     
    let writeData = writeFileSync(filepath, "Good Morning"); 
    console.log(writeData); 
    } 
    export function read(){     
        let filepath =  "C:\A PG-DAC\DAC\WBT\programs\day9\wpt2"; 
        let fileData = readFileSync(filepath , { encoding: "utf-8"});     
        return fileData;
    }