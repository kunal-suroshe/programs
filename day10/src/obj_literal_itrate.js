function main(){
    let list=[{StudentID:101, Name:"Kunal" , Course:"DAC"} , 
              {StudentID:102, Name:"Roshan" , Course:"DAC"} ,
              {StudentID:103, Name:"Monika" , Course:"DAC"} ,];
              console.log(list);

              console.log("after iteration");
              for(let item of list){
                console.log(item);
              }
}
main();