//This makes a comment (It isn't run by the browser)
//Everywhere on the right side of // is a comment

/*The comment type above only works for one line
This type of comment can span multiple lines or 
go for only a small area
*/

var hello; //This makes a variable hello

hello = "World"; //we can set the variable using =

var world = "Hello "; // We can set the variable when we make it

console.log(hello); //this will print the contents of the variable hello to the console

console.log(world + hello); //We can add variables together with + 

function helloworld(){ //we can make a function like this
	console.log(world + hello); //everything inside will excecute when we call it
}
console.log("helloworld()");
helloworld(); //this is how we call functions

function say(a, b){ //we can also have inputs to functions
	console.log(a+b);
}

console.log("Say:");

say(world,hello); //and this is how we pass in inputs

console.log("while loop");
var i = 0;
while(i < 9){ //the code in the {} will loop until i < 9 does not evaluate to true
	console.log(i);
	i++;
}

console.log("for loop");

for(var k = 0; k < 9; k++){ //does the same thing as the while lop
	console.log(k);
}

