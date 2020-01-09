//Evaluate these:
//#1
[2] === [2]; 
//False
//{} === {}; 
//False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
//Object 2 and 3 has a:4


//#3 create two classes: an Animal class and a Mamal class.
class Animal {
	constructor(type , name ,color){
		this.type = type;
		this.name = name;
		this.color = color;
	}
}
class Mamal extends Animal{
	constructor(type,name,color){
		super(type,name,color);
	}
	sound(){
		console.log(this.type+" "+this.name+" "+this.color);
	}
} 
//create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
const cow = new Mamal('cow','Shelly','brown');
cow.sound();