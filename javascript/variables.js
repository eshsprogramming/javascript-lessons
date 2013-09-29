var data; //as you will recall var makes a variable

//      Objects 

data = 3; //we can assign it values aswell

console.log(data);
//but we need more versatility than just plain values

data = {}; //we can assign it an object

data.subdata = 3; //it can now have sub-variables or member variables

console.log(data); //what is logged is interesting

data = {yay: 3, subdata: 9};//we can also define member variables in the decalration

console.log(data);

//     Arrays 

data = []; // [] signifies an array; an array is like a bunch of variables in one clump

data[0] = 3; //we can acess each variable by putting its index in [] after the array name

data[1] = 4;

console.log(data);

data = [5,6,7,8]; //we can also define arrays in the declaration

console.log(data);