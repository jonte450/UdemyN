// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
alert("Please enter your name and age in the two following prompt!");
var name = prompt();
var age = Number(prompt());
// IF they say they are below 18, respond with:
if(age < 18){
alert("Sorry, you are too young to drive this car. Powering off");
}
// IF they say they are 18, respond with:
else if(age === 18) {
alert("Congratulations on your first year of driving. Enjoy the ride!");	
}

// IF they say they are over 18, respond with:
else if (age > 18) {
alert("Powering On. Enjoy the ride!");	
}
