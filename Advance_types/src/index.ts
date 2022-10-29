// Advance types
// Type aliases
// Unions and intersections
// Type narrowing
// Nullable types
// The unknown type
// The never type

// --------------------TYPE ALIASES---------------------//
// why
// dont repeate yourself(DRY)
// dont duplicate reuseable code
// another type of object can be extend previous
// code readability more
// how
// use PascaleCase
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 4,
  name: "modi",
  retire: (date: Date) => console.log(date),
};

// --------------------UNION TYPES---------------------//
// why
// annote two or more type on variable without use any keyword
// how

let a: number | string = 12;
a = "s";

function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// --------------------TYPE INTERSECTION-----------------//
// why
// reusing previous defining types
// how

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// -------------------LITERAL TYPES------------------------//
// why
// limit the value of any variable
// how
let quantity: 50 = 50;
let quantity1: 50 | 100 = 100;

type Quantity = 50 | 100;
let quantity2: Quantity = 100;

type Metric = "m" | "cm" | "inch";
let metric: Metric = "cm";

// ------------------NULLABLE TYPES------------------------//
// why
// typescript very strict about null and undefined values
// null and undefined values are common source of application bug

function greet(name: string | null | undefined) {
  console.log(name);
}
greet(null);
greet(undefined);

// -----------------OPTIONAL CHAINING----------------------//
// why 
    // not use much more if else condition we can simply use optional property access operator
// how 

// Optional Property
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id ===0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)
console.log(customer.birthday)
console.log(customer?.birthday)

// Optional Call 
let log: any = null;

log?.('a')