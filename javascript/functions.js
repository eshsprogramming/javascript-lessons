var func = function(){ //instead of the standard decalration, fucntions can be declared as variables
	console.log("Function as variable");
};

func(); //you can call it the same way though

var other = func; //you can assign it to other variables aswell

console.log("assigned function");

other();

func = function(a){//when you reassign the original it does not reset any assignments made previously
	console.log("In func:")
	a(); //this function will call the function passed as an input
};

func(other); 

/*the above example uses an idea called a callback;
 *essentially you pass in a function that you want to be called later
 *This lets javascript run asynchronously (look it up)
 */
