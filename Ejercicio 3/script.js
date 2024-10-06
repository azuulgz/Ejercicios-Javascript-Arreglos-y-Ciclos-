/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */


let additionAndMultiplication = (array) => {
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return (`El resultado de la suma es:  ${sum} y de la multiplicacion:  ${product}`);
}
console.log (additionAndMultiplication([5,4,2]));
console.log (additionAndMultiplication([1,2]));