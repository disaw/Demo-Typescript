console.log('hello world!')


async function hello() {
	return 'world'
}


let lucky = 23;
let lucky: any = 32;


interface Person {
	first: string:
	last: string;
}
const person: Person = {
	first: 'Sam',
	last: 'John'
	age: 20
}


function pow(x, y) {
	return Math.pow(x, y);
}
function pow2(x:number, y:number): string {
	return Math.pow(x, y).toString();
}
pow(5, 10);


const arr: number[] = []
arr.push(1);
arr.push(5);


const arr2: Person[] = []


type MyList = [number?, string?, boolean?]
const arr3: MyList = []
arr3.push(1);
arr3.push('23');
arr3.push(false);


//Genarics
class Observable<T> {
	constructor(public value:T){}
}
let x: Observable<number>;
let y: Observable<Person>;
let z: Observable(23);






















