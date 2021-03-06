/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

//1-3
var john_average_score = (89+120+103)/3;
var mikes_average_score = (116+94+123)/3;
var mary_average_score = (97+134+105)/3;

if(john_average_score > mikes_average_score && john_average_score > mary_average_score){
console.log("The winner is John between Mary and Mike and John");
}
else if (mikes_average_score > john_average_score && mikes_average_score > mary_average_score){
console.log("The winner is Mike between Mary and Mike and John");
}
else if (mary_average_score > john_average_score && mary_average_score > mikes_average_score){
console.log("The winner is Mary between Mary and Mike and John");
}
else{
  console.log("There is a draw between Mary and Mike and John");
}

//4-5
if(john_average_score> mikes_average_score){
console.log("The winner is John between Mike and John");
}
else if (mikes_average_score > john_average_score){
console.log("The winner is Mike between Mike and John");
}
else{
  console.log("There is a draw between Mike and John");
}
