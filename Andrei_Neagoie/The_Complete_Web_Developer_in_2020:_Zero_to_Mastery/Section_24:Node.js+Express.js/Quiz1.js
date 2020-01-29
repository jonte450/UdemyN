//Part 1
const fs = require('fs');
fs.readFile('Input_advent_quiz1.txt', 'utf-8', function(err,data){
	console.time('santa-time');
	if(err){
	  console.log(err);
	}else{
	   var level = 0;
	   var check = data.toString();
	   for(char of check){
	    if(char === '('){
	    	level += 1;
	    }
	    else if (char ===')'){
	    	level -= 1;
	    }
	   }
	   console.timeEnd('santa-time');
	   console.log("Level",level);
	}
});

//Part 2
fs.readFile('Input_advent_quiz1.txt', 'utf-8', function(err,data){
	console.time('santa-time');
	if(err){
	  console.log(err);
	}else{
	   var level = 0;
	   var check = data.toString();
	   var counter = 0;
	   for(char of check){
	   	if(level < 0){
	   		break;
	   	}
	    if(char === '('){
	    	level += 1;
	    }
	    else if (char ===')'){
	    	level -= 1;
	    }
	    counter++;
	   }
	   console.timeEnd('santa-time');
	   console.log("Basement entered at: ",counter);
	}
});



