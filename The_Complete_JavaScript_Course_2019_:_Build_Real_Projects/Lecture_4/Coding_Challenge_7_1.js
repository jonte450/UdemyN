/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
  var Question = function(describes,answer,choose_answer){
    this.describes = describes;
    this.answer = answer;
    this.choose_answer = choose_answer;
  }

  Question.prototype.display_solutions = function(){
    console.log("0:"+this.choose_answer[0]);
    console.log("1:"+this.choose_answer[1]);
    console.log("2:"+this.choose_answer[2]);
  }
  Question.prototype.check_answer = function(user_answer){
    if(user_answer > (this.choose_answer.length-1)){
      console.log("Please add an valid number!");
    }

    else if (this.answer === quest.choose_answer[user_answer]){
      console.log("You are correct");
    }
    else{
      console.log("You are wrong!");
      console.log("Please try again!");
    }
  }
  Question.prototype.ask_question = function(){
    return prompt(this.describes,"Please enter an valid number on the solutions!");
  }

  var progmming_1 = new Question("When was Javascript created?",'1995',['1994','1995','1996']);
  var progmming_2 = new Question("What is almost evrything Javascript build on?",'Objects',['Objects','Arrays','Primitives']);
  var progmming_3 = new Question("Who is the inventor of Javascript?",'Brendan Eich',['Steve Jobs','Bill Gates','Brendan Eich']);

  the_questions = [progmming_1,progmming_2,progmming_3];
  var quest = the_questions[Math.floor(Math.random()*the_questions.length)];
  quest.display_solutions();
  var check = quest.ask_question();
  quest.check_answer(check);

})();
