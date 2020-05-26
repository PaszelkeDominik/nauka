

let crazyCow = require("cowsay");
let normalCow = require("cowsay");

console.log(
  crazyCow.say({ text: "Cieć pyta ciecia, która godzina?", e: "oO", T: "U " })
);

console.log(normalCow.think({ text: "hmmm" }));
console.log(normalCow.say({ text: "no nie wiem, która?" }));
console.log(crazyCow.say({ text: "ciecia XD", e: "oO", T: "U" }));

