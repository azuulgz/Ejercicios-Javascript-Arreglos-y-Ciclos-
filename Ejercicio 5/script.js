/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */
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