// we w'll learn
    // any 
    // Arrays 
    // tuple 
    // Enums 
    // Functions 
    // objects 




// -------------------array--------------------------//
let numbers: number []  = [];
let numbers 		    = [1,2,3];
let strings: string []  = [];
let string		        = ['a', 'b', 'c'];


// -------------------tuple--------------------------//
let user: [number, string] = [1, 'name']; //recommanded for only key-value pairs

// -------------------enums--------------------------//
const small     = 1;
const medium    = 2;
const large     = 3;

// pascleCase
enum Size{Small = 1, Medium, Large };
let mySize : Size = Size.Medium;
console.log(mySize)

// More optimize way do this

const enum Size = {Small=1, Medium, Large}

// // another type we declare this

enum Size {Small= 0, Medium, Large}
enum Size {Small= 's', Medium='m', Large='l'}
enum Size {Small, Medium, Large} // explicitly set to 0, 1, 2



// ----------------------functions------------------------//

// void mean function has no return value
// best practice-> always annotate return value type explictly

function calculateTax(income: number): number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3;
}

// using optional paramer

function calculateTax1(income: number, tax?: number): number {
    if((tax || 3000) < 3000)
        return income * 2.3;
    return income * 3;
}

function calculateTax2(income: number, tax = 3000): number {
    if(tax < 3000)
        return income * 2.3;
    return income * 3;
}

// summary 
// 1. always properly annotate functions with properly parameter and returns types. 
// 2. and enable this three compiler options
    // -- noUnusedLocals
    // -- noUnusedParameters
    // -- noImlicitReturns


// -----------------object---------------------//
let employee = {id: 1}
employee.name = 'mmm'

let employee1: {
    id: number,
    name?: string
} = { id:4 }
// always should avoid optional. because of we are using typescript not js

let employee2: {
    id: number,
    name: string
} = { id:4, name: 'hello' }

// but we can modify object key value. this is can be rule breaking of typescript, so...

let employee3: {
    readonly id: number,
    name: string
} = { id:4, name: 'hello' }

employee3.id = 6;


let employee4: {
    readonly id: number,
    name: string, 
    retire: (date: Date)=> void;
} = { 
    id:4, 
    name: 'hello',
    retire: (date: Date)=> console.log(date)
 }

















