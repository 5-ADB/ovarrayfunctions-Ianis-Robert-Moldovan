/**
 * filter alle namen die start met een p uit de array.
 * (enkel die met een p blijven over)
 *
 */
const namenlijst = ["Karel", "Pieter", "Pol", "Stef"];
const gefilterd = namenlijst.filter(naam => naam.toLowerCase().startsWith('p'))

console.log(gefilterd);
