// -1
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


// -2
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


// -3
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


// -4
type item = {
    title: string,
    rating: number
}
const filterByRating = (items : item[]) => {
    const getTopItem = items.filter(product => product.rating >= 4)
    console.log(getTopItem)
    return getTopItem;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]
filterByRating(books)


// -5 
type user = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
const filterActiveUsers = (users:user[]) =>{ 
    const getActive = users.filter(user => user.isActive=== true)
    console.log(getActive)
}
const user1 = {
    id:26,
    name:"Maruf",
    email:"maruf@gmail.com",
    isActive:true
}
filterActiveUsers([user1]);


//-6

type Book ={
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}
function printBookDetails (books:Book){
    if (books.isAvailable===true){
        console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: yes`)
    }
    else{
        console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: no`)
    }  
}
const book1: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};
printBookDetails(book1);


//-7

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];
    const common = (array: (string | number)[], value: string | number): boolean => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    };
    for (let i = 0; i < arr1.length; i++) {
        if (!common(result, arr1[i])) {
            result[result.length] = arr1[i];
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!common(result, arr2[i])) {
            result[result.length] = arr2[i];
        }
    }
    return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
getUniqueValues(array1, array2);


// -8
type Product = {
    name: string
    price: number
    quantity: number
    discount?: number
}
const calculateTotalPrice = (products: Product[]) => {
    let totalPrice = 0;
    const getProductsPrice = products.map(product => {
            let productPrice = product.price
        if(product.discount){
            
            let discountAmount = (productPrice * product.quantity) * (product.discount / 100)
            let totalPriceBeforeDiscount = productPrice * product.quantity;
            let finalPrice = totalPriceBeforeDiscount - discountAmount;
            totalPrice += finalPrice
            
        }
        else{
            let totalPriceBeforeDiscount = productPrice * product.quantity;
            totalPrice += totalPriceBeforeDiscount;  
        }
        console.log(totalPrice);
        return totalPrice
    })

}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
 calculateTotalPrice(products)


