let preQuali = drivers;
let Q1results = [];
let Q2results = [];
var afterQuali = [];

//Q1 simulation
function Q1() {
  //Adding points to drivers
  for (var i = 0; i < preQuali.length; i++) {
    preQuali[i].qualiPoints += Math.floor(
      Math.random() * (preQuali[i].powerPoints - 0) + 0
    );
  }

  //Sorting array
  preQuali.sort((a, b) => (a.qualiPoints > b.qualiPoints ? -1 : 1));

  for (let i = 0; i < preQuali.length + 9; i++) {
    Q1results.push(preQuali.shift());
  }

  afterQuali = preQuali.concat(afterQuali);
}

//Q2 simulation
function Q2() {
  //Adding points to drivers
  for (var i = 0; i < Q1results.length; i++) {
    Q1results[i].qualiPoints += 0;
    Q1results[i].qualiPoints += Math.floor(
      Math.random() * (Q1results[i].powerPoints - 0) + 0
    );
  }

  //Sorting array
  Q1results.sort((a, b) => (a.qualiPoints > b.qualiPoints ? -1 : 1));

  for (let i = 0; i < Q1results.length + 4; i++) {
    Q2results.push(Q1results.shift());
  }

  afterQuali = Q1results.concat(afterQuali);
}

//Q3 simulation
function Q3() {
  //Adding points to drivers
  for (var i = 0; i < Q2results.length; i++) {
    Q2results[i].qualiPoints += 0;
    Q2results[i].qualiPoints += Math.floor(
      Math.random() * (Q2results[i].powerPoints - 0) + 0
    );
  }

  //Sorting array
  Q2results.sort((a, b) => (a.qualiPoints > b.qualiPoints ? -1 : 1));

  afterQuali = Q2results.concat(afterQuali);
}

Q1();
Q2();
Q3();

//Adding grid position to each driver
for (let i = 0; i < afterQuali.length; i++) {
  afterQuali[i].qualiGrid = 0;
  afterQuali[i].qualiGrid += i + 1;
}
