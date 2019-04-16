import FibConst, { fib } from './fibonacci';
import { Stack } from './stack';

// import FibConst, {fib} from ...

// TODO: import Stack from ...

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)
console.log('fib(FibConst) is:', fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
type TrafficLight = 'red' | 'green' | 'yellow';

// TODO: define Car interface
interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}
// TODO: create Car instance
const myCar: Car = {
  wheels: 4,
  color: 'blue',
  make: 'Citroen',
  model: 'Xara'
};
// ---- Generics ----
console.log('My car:', myCar);

const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Number on top of the stack:', myStack.pop());

// TODO: Demonstrate the Stack
// const myStack: Stack<number> = ???

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

const megaObj = { ...obj1, ...obj2 };

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
// const megaObj = ???

// TODO: use destructuring syntax to extract { first, second, catcher }

// ---- Async / Await ----
function makePromise(): Promise<number> {
  return Promise.resolve(5);
}

async function getGreeting(name: string): Promise<string> {
  return 'hello ' + name;
}

async function run() {
  const result = await makePromise();
  console.log('makePromise returned:', result);

  const greeting = await getGreeting('Miguel');
  console.log('greeting:', greeting);
}


run();

// Make this file a module so its code doesn't go in the global scope
export {};
