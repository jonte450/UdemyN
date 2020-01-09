//Question 1: Clean the room function: given an input of 
//[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual 
//array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 
//4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number
//types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
var array4 = ['1', 2, 4, 591, '392', 391, '2', 5, 10, 2, '1', 1, '1', 20, 20];
var array3 = ['1', 2, 4, 591, '392', 391, '2', 5, 10, 2, '1', 1, '1', 20, 20];
var array2 = [1, "2", "3", 2];
var array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function sortCleanRoom(arr){
var check_i = 0;
var check_i_plus_one = 0;
for(var j = 0; j < arr.length; j++){
for(var i = 0; i < arr.length;i++){
if(Array.isArray(arr[i])){
      check_i = arr[i][0];
}else{
	check_i = arr[i];
}
if(Array.isArray(arr[i+1])){
      check_i_plus_one = arr[i+1][0];
}else{
	check_i_plus_one = arr[i+1];
}
if(check_i > check_i_plus_one){
 let tmp = arr[i];
 arr[i] = arr[i+1];
 arr[i+1] = tmp;
}		
}
}
return arr;
}

function Organize(arr){
var check = [];
var clean = [];
for(el of arr){
var occur = arr.reduce((counter,num) => {if(el === num){
	             return 1 +counter;
	         }else{
	         	return 0 + counter;
	         }
},0);
if(occur > 1 && (!check.includes(el))) {
	check.push(el);
	var add = arr.filter(element => el === element);
	clean.push(add.concat());
}else if((!check.includes(el))){
	check.push(el);
	clean.push(el);
}
}
sortCleanRoom(clean);
return clean;	

}

function cleanTheRoom(arr){
var clean_room = [];
var strings = arr.filter(element => typeof element === "string");
var numbers = arr.filter(element => typeof element === "number");
var clean_numbers = Organize(numbers);
var clean_strings = Organize(strings);
if(clean_numbers.length > 0){
clean_room.push(clean_numbers.concat());
}
if(clean_strings.length > 0){
clean_room.push(clean_strings.concat());
}
return clean_room;
}


var check = cleanTheRoom(array3);
console.log(check);