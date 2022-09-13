'use strict';

var entry;
var average;
var scores = [];
var total = 0;
var show = "The test scores:\n";

// use a do-while loop to get scores from user
do {
    entry = prompt("Enter test score\n" +
                   "Or enter 999 to end entries");
    entry = parseInt(entry);
    document.write('<h2> <i><center>Test Score<i> <span id = "result"></span>'+entry+' </center></h2>');
    if (entry >= 0 && entry <= 100) {
        scores[scores.length] = entry;
    } else if (entry != 999){
      
        alert("Entry must by a valid number from 0 through 100\n" +
              "Or enter 999 to end entries");
    }
}
while (entry != 999); 

if (scores.length != 0) {
  // use a for loop to process the scores
  for (var i = 0; i < scores.length; i++) {
      total = total + scores[i];       // both are numbers so adds
      show = show + scores[i] + "\n";  // strings & number so concatenates
  }

    // calculate the average and display
  average = parseInt(total/scores.length);
  document.write('<h2> <i><center>Average Score<i> <span id = "result"></span>'+average+' </center></h2>');
  alert(show + "\nAverage score is " + average);          
}

