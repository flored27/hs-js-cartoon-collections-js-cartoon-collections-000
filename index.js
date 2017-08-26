function dwarfRollCall(dwarves) {
  var DL = dwarves.length;
  var i = 0;
  while (i < DL) {
    dwarves[i] = [`${i+1}. ${dwarves[i]} `];
    i++;}
    return dwarves.join("");
  }


function summonCaptainPlanet(planeteerCalls){
  var PL = planeteerCalls.length;
  for(var i = 0; i < PL; i++){
    planeteerCalls[i] = `${planeteerCalls[i].toUpperCase()}!`;
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  var WL = words.length;
  for(var i = 0; i < WL; i++){
    if (words[i].length > 4) {
      return true
    }
    else {
      return false
    }
}
}

function findTheCheese (foods) {
  var FL = foods.length;
 for(var i = 0; i < FL; i++) {
   if (foods[i] == "cheddar") {
     return "cheddar";
   }
   else if (foods[i] == "gouda") {
     return "gouda";
   }
   else if (foods[i] == "camembert") {
     return "camembert";
   }
 }
   return "no cheese!";
 }
