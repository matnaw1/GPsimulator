let raceResults = [];

//Simulating the race
let race = () => {
  for (let i = 0; i < afterQuali.length; i++) {
    if (afterQuali[i].gridPosition > 8) {
      afterQuali[i].racingPoints +=
        afterQuali[i].powerPoints / afterQuali[i].gridPosition +
        Math.floor(Math.random() * (10 - 5) + 0);
    } else {
      afterQuali[i].racingPoints +=
        afterQuali[i].powerPoints / 3 + Math.floor(Math.random() * (5 - 0) + 0);
    }
  }
};

race();

raceResults = [].concat(afterQuali);
raceResults.sort((a, b) => (a.racingPoints > b.racingPoints ? -1 : 1));

//Adding grid position to each driver
for (let i = 0; i < raceResults.length; i++) {
  raceResults[i].gridPosition = 0;
  raceResults[i].gridPosition += i + 1;
}
