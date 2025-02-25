/**
 * Bereken zijn percentage voor wiskunde
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 15 },
  { vak: "wiskunde", punt: 4, totaal: 5 },
  { vak: "nederlands", punt: 8, totaal: 15 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];

let percentageWiskunde = resultaten
  .filter((resultaat) => resultaat.vak === "wiskunde")
  .reduce((som, resultaat) => som + (resultaat.punt / resultaat.totaal) * 100, 0) / 2;