function main(){
    let jsonStr=`{"employeeID": 101 , "employeeName":"Roshan" , "Department":"Developer"}`;
    console.log(jsonStr);

    //converting the JSON to object literal
    let obj = JSON.parse(jsonStr);
    console.log(obj);
}
main();