function main(){

    let obj1 ={id:1,name:"kunal",email:"kunal@gmail.com",phone:"9200920000",};
    console.log(obj1);

    //add members course and batch 
   obj1.course = "CDAC";
   obj1.batch ="mar-2023";
   console.log("members added")
   console.log(obj1);

   //remove the members phone and batch and display the data
   delete obj1.phone;
   delete obj1.batch;
   console.log("members removed")
   console.log(obj1);

   //conver object literals to JSON and display
   let str = JSON.stringify(obj1);
   console.log("obj literal to JSON")
   console.log(str);

    }
    
    main();