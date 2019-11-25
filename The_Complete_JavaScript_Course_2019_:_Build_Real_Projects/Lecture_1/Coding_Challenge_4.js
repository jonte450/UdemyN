/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/


var Mark = {name:'Mark Miller',
            height: 1.69,
            mass: 78,
            calc_bmi: function(){
              this.bmi = this.mass/(this.height*this.height);
              return this.bmi;
            }

}

var John = {name:'John Smith',
            height: 1.95,
            mass: 92,
            calc_bmi: function(){
              this.bmi = this.mass/(this.height*this.height);
              return this.bmi;
            }

}

highest_bmi = John.calc_bmi() > Mark.calc_bmi() ? John.calc_bmi() : Mark.calc_bmi();
name = John.calc_bmi() > Mark.calc_bmi() ? John.name : Mark.name;

console.log(name+" has the highest BMI is: " +highest_bmi);
