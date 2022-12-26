import { isNullishCoalesce } from "typescript";

//any type
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

//array type
let numbers: number[] = [];
numbers[0] = 7
numbers[1] = 5;

//tuples - fixed lenght array with set types (for two values)
let user: [number, string] = [1, 'Mosh']

//enums - list of related constants
/* const small = 1;
const medium = 2;
const large = 3; */

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

//functions
function calculateTax(income: number, taxYear: 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022);

//objects (readonly - to prevent to modify the value)
//and alias

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} 
let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire:(date: Date) => {
        console.log(date);
    }
};
    
//Union type - we can give a var or function more than one type
function kgToLbs(weight: number | string): number {
// Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2;
        else 
            return parseInt(weight) * 2.2
        }

    kgToLbs(10);
kgToLbs('10kg');
    

//Intersection Types - to combine two things
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal types - to limit the values we can assign to a var
//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'mm';
let metric: Metric = 'mm';

//Nullable types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log('Hola')
}

greet(undefined)

//Optional Chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//if (customer !== null && customer !== undefined)
console.log(customer?.birthday);


