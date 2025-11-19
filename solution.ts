// problem-1
const formatValue = (any:string|number|boolean)=>{
if(typeof any === "string"){
    const result = any.toUpperCase();
    console.log(result);
    return result
}
else if(typeof any === "number"){
    let multiply = any * 10;
    console.log(multiply);
    return multiply;
}
else if( typeof any === "boolean"){
    if(any == true){
        any=false;
        console.log(any)
    }
    else{
        any = true;
        console.log(any)
    }
}
}

formatValue(true);

