import afterQuali from "./qualification.js";

for (let i = 0; i < afterQuali.length; i++) {
  afterQuali[i].gridPosition += i + 1;
}

for (let i = 0; i < afterQuali.length; i++) {
  console.log(
    afterQuali[i].name +
      " " +
      afterQuali[i].surname +
      " " +
      afterQuali[i].gridPosition
  );
}

let raceResults = [];

// powerPoints/gridPosition + Math.random
