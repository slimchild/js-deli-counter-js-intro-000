function takeANumber(katzDeliLine,name){
katzDeliLine.push(name);
return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

// nowServing(katzDeliLine){
//return(katzDeliLine[0]);
  //katzDeliLine.shift(0);
function nowServing(katzDeliLine){
if(katzDeliLine.length > 0){
  return "Currently serving " + katzDeliLine.shift() + ".";
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine){
  for(var i = 0; i < katzDeliLine.length; i++){
    return ("The line is currently: " + katzDeliLine.join());
  }
}
  //if(katzDeliLine.length > 0){
  //  return ("The line is currently: " + katzDeliLine.join())
  //} else {
//    return "The line is currently empty.";
//  }
//}
