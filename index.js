// NUMBER
const price = prompt('What is the price of this item?');
const amount = prompt('What is the quantity of the product?');

const newPrice = Number(price);
const newAmount = Number(amount);
console.log(typeof newPrice);
console.log(Number.isNaN(newPrice));
console.log(typeof newAmount);
console.log(Number.isNaN(newAmount));

let summary = newPrice * newAmount;
console.log(summary);
console.log(typeof summary);
console.log(Number.isNaN(summary));

summary -= summary * 0.15;
console.log(summary);
console.log(typeof summary);
console.log(Number.isNaN(summary));

// STRING
const city = prompt('What city do you live in?');
const country = prompt('What country do you live in?');

const cityTrim = city.trim();
const countryTrim = country.trim();

console.log(cityTrim.toLocaleUpperCase());
console.log(countryTrim.toLocaleLowerCase());

console.log(cityTrim.length);
console.log(countryTrim.length);

console.log(cityTrim.includes('a'));

console.log(cityTrim.indexOf('a'));
console.log(cityTrim.lastIndexOf('a'));

const text = `I live in ${cityTrim}, ${countryTrim}`;
console.log(text);

// MATH
const num1 = 34.6;
const num2 = 27.3;

const sum = num1 + num2;
const sub = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
console.log(sum);
console.log(sub);
console.log(product);
console.log(quotient);

console.log(Math.round(quotient));
console.log(Math.floor(quotient));
console.log(Math.ceil(quotient));

console.log(Math.max(num1, num2));
console.log(Math.min(num1, num2));
