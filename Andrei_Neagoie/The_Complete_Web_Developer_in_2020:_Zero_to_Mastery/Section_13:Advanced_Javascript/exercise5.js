// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
new_array = [];
array.forEach(element => {let user = element.username;
                         user_nam = user + "!";
                             new_array.push(user_nam); });
console.log(new_array);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map( user => {
  return user.username + "?";
});

console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => { let {team} = user 
                                           return team === "red";});
console.log(filterArray);

//Find out the total score of all users using reduce
const array_reduce = array.reduce((acc,num) => {
  return acc + num.score;
},0);

console.log(array_reduce);

// (1), what is the value of i?
//The value of i is 0,1,2,3,4,5,6
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const add_to_items = array.map(user => {
                     user.items = user.items.map(item => {return item + "!"});
                     return user;
});

console.log(add_to_items);