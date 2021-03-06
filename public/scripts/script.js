// jshint esversion:6

const ctx = document.getElementById("chart").getContext("2d");
const casesAll = document.getElementById("casesAll").textContent;
const deathsAll = document.getElementById("deathsAll").textContent;
const recoveredAll = document.getElementById("recoveredAll").textContent;
const casesBD = document.getElementById("casesBD").textContent;
const deathsBD = document.getElementById("deathsBD").textContent;
const recoveredBD = document.getElementById("recoveredBD").textContent;

const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Cases(" + casesAll + ")",
      "Deaths(" + deathsAll + ")",
      "Recovered(" + recoveredAll + ")",
    ],
    datasets: [
      {
        label: "",
        data: [casesAll, deathsAll, recoveredAll],
        backgroundColor: ["#757575", "#ff5252", "#8bc34a"],
        borderColor: ["#BDBDBD", "#BDBDBD", "#BDBDBD"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      duration: 2000,
    },
  },
});

const ctx1 = document.getElementById("myChart").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: [
      "Cases(" + casesBD + ")",
      "Deaths(" + deathsBD + ")",
      "Recovered(" + recoveredBD + ")",
    ],
    datasets: [
      {
        label: "",
        data: [casesBD, deathsBD, recoveredBD],
        backgroundColor: ["#757575", "#ff5252", "#8bc34a"],
        borderColor: ["#BDBDBD", "#BDBDBD", "#BDBDBD"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      duration: 2000,
    },
  },
});
