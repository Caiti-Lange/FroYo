const userInputString = prompt(
  "Please enter enter a list of comma-separated froyo flavors.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
console.log(userInputString);

const flavors = userInputString.split(", ");
console.log(flavors);

let count = {};
for (let f = 0; f < flavors.length; f++) {
  if (count[flavors[f]]) {
    count[flavors[f]] += 1;
  } else {
    count[flavors[f]] = 1;
  }
}
console.log(count);
