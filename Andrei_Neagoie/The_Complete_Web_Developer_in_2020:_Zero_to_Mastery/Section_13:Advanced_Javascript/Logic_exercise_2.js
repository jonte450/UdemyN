
function answer(arr,tar){
    var subset_2 = [];
	for(num1 of arr){
		var sum = tar;
		sum -= num1;
		for(num2 of arr){
		  if(num1 === num2){
		  	continue;
		  }
			if((sum-num2) === 0){
				subset_2.push(num1);
				subset_2.push(num2);
				subset_2.sort();
				return subset_2;
			}
		}
	}
}

console.log(answer([1,2,3],4));
console.log(answer([2,3,4,5,6],7));
console.log(answer([20,30,40,50,60,70,80,90],100));
console.log(answer([30,40,50,60,70,80,90],100));
console.log(answer([80,40,50,60,70,80,90],100));
console.log(answer([40,80,30,10,40,70],100));
