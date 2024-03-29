/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values

2. Add a method to calculate the tip

3. This method should include a loop to iterate over all the paid bills and do the tip calculations

4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var John_tip = { full_name: 'John Smith',
                 bills: [124,48,268,180,42],
                 tips: [],
                 total_sums:[],
                 calc_tips:function(){

                  for(index = 0; index<this.bills.length;index++){
                    index_bill = this.bills[index];
                    if(index_bill<50){

                      this.tips[index] = index_bill*0.20;
                      this.total_sums[index] = index_bill + this.tips[index];

                    }
                    else if(index_bill>=50 && index_bill<200){
                      this.tips[index] = index_bill*0.15;
                      this.total_sums[index] = index_bill+ this.tips[index];
                    }
                    else{
                      this.tips[index] = index_bill*0.10;
                      this.total_sums[index] = index_bill + this.tips[index];
                    }
                  }
                 }

}
John_tip.calc_tips();
console.log(John_tip);
/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules

6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family

8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

function calc_aver(list){
  var sum = 0;
  for(i = 0; i <list.length;i++){
    sum += list[i];
  }
  return sum/list.length;
}

var Mark_tip = { full_name: 'Mark Miller',
                 bills: [77,475,110,45],
                 tips: [],
                 total_sums:[],
                 calc_tips:function(){

                  for(index = 0; index<this.bills.length;index++){
                    index_bill = this.bills[index];
                    if(index_bill<100){

                      this.tips[index] = index_bill*0.20;
                      this.total_sums[index] = index_bill + this.tips[index];

                    }
                    else if(index_bill>=100 && index_bill<300){
                      this.tips[index] = index_bill*0.10;
                      this.total_sums[index] = index_bill+ this.tips[index];
                    }
                    else{
                      this.tips[index] = index_bill*0.25;
                      this.total_sums[index] = index_bill + this.tips[index];
                    }
                  }
                 }

}

Mark_tip.calc_tips();
average_John = calc_aver(John_tip.tips);
average_Mark = calc_aver(Mark_tip.tips);

console.log(Mark_tip,John_tip);
console.log(average_John,average_Mark);
if(average_John > average_Mark){
  console.log(John_tip.full_name +" has the highest average: " +average_John);
}
else if(average_John < average_Mark){
  console.log(Mark_tip.full_name +" has the highest average: " +average_Mark);
}
else {
  console.log("It is a draw!");
}
