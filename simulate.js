let count = -1;

//outputing qualification result button
var simulateQuali = () => {
  count += 1;

  //clearing elements after second click
  document.getElementById("qualiResult").innerHTML = "";

  for (let i = 0; i < afterQuali.length; i++) {
    document.getElementById("qualiResult").innerHTML +=
      afterQuali[i].qualiGrid +
      " " +
      afterQuali[i].name +
      " " +
      afterQuali[i].surname +
      // " - " +
      // quali[i].qualiPoints +
      "<br />";
  }

  //reload the page
  if (count > 0) {
    location.reload(true);
  }
};

//outputing race result button
var simulateRace = () => {
  document.getElementById("raceResult").innerHTML = "";

  for (let i = 0; i < afterQuali.length; i++) {
    document.getElementById("raceResult").innerHTML +=
      raceResults[i].gridPosition +
      " " +
      raceResults[i].name +
      " " +
      raceResults[i].surname +
      // " - " +
      // raceResults[i].racingPoints +
      "<br />";
  }
};

document.getElementById("quali-btn").addEventListener("click", function () {
  document.getElementById("race-btn").disabled = false;
});
