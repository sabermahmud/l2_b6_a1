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


// problem-2

const  getLength = (a : string | any[] )=> {if(typeof a === "string"){
    const res1 = a.length;
    console.log("this is string:",res1) 
    return res1
}
else if(Array.isArray(a)){
    const res2 = a.length
    console.log("this is array:",res2)
    return res2
}}
getLength("abdullah");
getLength([1,2,6,9,56,125,653,52])


// problem-3

class Person {
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
      getDetails(){
        return `Name:${this.name}. Age: ${this.age}`
    }
}
const person1 = new Person ('Md:Maruf', 45);

person1.getDetails()


// 

