import { halfOf, multiply } from './lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';
import { Car, Vehicle } from './class.js';
import arrowAdd from './arrow.js';

console.log(halfOf(84));
console.log(multiply(21, 2));

doSomething();

console.log(flag);
touch();
console.log(flag);

let newCar = new Car('blue');

console.log(newCar.toString());
console.log(newCar instanceof Car);
console.log(newCar instanceof Vehicle);

console.log(arrowAdd(4, 5));