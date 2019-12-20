// using this array,

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

 
array.shift();
console.log("1. Remove the Banana from the array.")
console.log(array);

array.sort();
console.log("2. Sort the array in order.");
console.log(array);

array.push('Kiwi');
console.log("3. Put \"Kiwi\" at the end of the array.")
console.log(array);

array.shift();
console.log("4. Remove \"Apples\" from the array.");
console.log(array);

// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

array.reverse();
console.log("5. Sort the array in reverse order. (Not alphabetical, but reverse");
console.log(array);


// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log("access Oranges");
console.log(array2[1][1][0]);
