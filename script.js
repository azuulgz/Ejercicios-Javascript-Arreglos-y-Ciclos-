
/* EJERCICIO 1 */
let arr = ["This", "is", "a", "sentence."];
function printOutString(array) {
  let arrToString = array.join(" ");
  return arrToString;
}
document.getElementById("resultado-ejercicio-uno").innerHTML = ("The result of this excercise is: "  + printOutString(arr));
console.log(printOutString(arr));




/* EJERCICIO 2 */
let changeTheArray = (array) => {
    let doubledArray = array.map(num => num*2);
    return doubledArray
  }
  document.getElementById("resultado-ejercicio-dos").innerHTML = ("The result of this excercise is: "  + changeTheArray([1,2,3,4]));
  console.log(changeTheArray([1,2,3,4]));





/* EJERCICIO 3 */
let additionAndMultiplication = (array) => {
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return (`El resultado de la suma es:  ${sum} y de la multiplicacion:  ${product}`);
  }
  document.getElementById("resultado-ejercicio-tres").innerHTML = ("The result of this excercise is: "  + additionAndMultiplication([5,4,2]));
  document.getElementById("resultado-ejercicio-tres").innerHTML = ("The result of this excercise is: "  + additionAndMultiplication([1,2]));
  console.log (additionAndMultiplication([5,4,2]));
  console.log (additionAndMultiplication([1,2]));





/* EJERCICIO 4 */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let matchingCourses = student1Courses.filter(course => student2Courses.includes(course));

document.getElementById("resultado-ejercicio-cuatro").innerHTML = ("The result of this excercise is: " + matchingCourses);
console.log('cursos en comun:'+ matchingCourses);




/* EJERCICIO 5 */
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("1. Write a command that prints out all of the people in the list.");
people.forEach(person => {
    console.log(person);
});

console.log("2. Write the command to remove 'Dani' from the array.");
console.log(people.splice( 1, 1));
console.log(people);

console.log("3. Write the command to remove 'Juan' from the array.");
console.log(people.splice( 2, 1));
console.log(people);

console.log("4. Write the command to move 'Luis' to the front of the array.");
people.splice(people.indexOf("Luis"), 1); 
people.unshift("Luis"); 
console.log(people);

console.log("5. Write the command to add your name to the end of the array.");
people.push("Azul");
console.log(people);

console.log("6. Using a loop, iterate through this array and after console.log 'Maria', exit from the loop.");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

console.log("7. Write the command that gives the indexOf where 'Maria' is located.");
console.log('Index of Maria:', people.indexOf("Maria"));

console.log("At the end of the exercise, there should be 4 people in the array.");
console.log('Final people array:', people);

document.getElementById("resultado-ejercicio-cinco").innerHTML = ("The final array is: " + people);

/* EJERCICIO 6 */

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
  
    // Recorre todo el array tantas veces como sea necesario
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            // Si el elemento actual es mayor que el siguiente, intercambiamos
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Indica que hubo un intercambio
            }
        }
    } while (swapped); // Continúa hasta que no haya más intercambios
  
    return arr;
  }
  
  let inputArray = [3, 6, 12, 5, 100, 1];
  let sortedArray = bubbleSort(inputArray);
  console.log(sortedArray);
  document.getElementById("resultado-ejercicio-seis").innerHTML = ("The result of this excercise is: " + matchingCourses);