// //print length of string 
var str = "Javascript";
console.log(str.length);

// String Indices
var name = "Soniya";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

// ** Template Literals in JS: A way to have embedded expressions in String

let obj = {
    item: "pen",
    price: 10,
};
console.log(`cost of ${obj.item} is ${obj.price} rupees`);

var str2 = "neha \ningale"; // \n--> Escape characters gives the nextline in strings
console.log(str2);

let name1 = "rohit\tsharma"; //12 is length \t --> spacing of tab is counted as one .
console.log(name1.length);

// **STRING METHODS IN JS
//1) str.toUpperCase()
let str4 = "abcd";
str4= str4.toUpperCase();
console.log(str4);
//2) str.toLowerCase()                      /*  NOTE: Strings are Immutable --> cannot be changed, to make a change we need to create new string */
var str5 = "ABCD";                          
str4= str4.toLowerCase();
console.log(str4);
//3) str.trim() --> removes whitespaces --> stating & ending
var str = "   hello Welcome     ";
str = str.trim();
console.log(str);
//4) str.slice()
var str = "JAVASCRIPT" ;
str = str.slice(1,5); // end index is not inclusive
console.log(str); // i.e string is printed from 1 to 4 only.

var str = "JAVASCRIPT";
str = str.slice(5); // end index is taken as last index .
console.log(str); 
//5) str.concat()--> joins two string
var str1= "java";
var str2 = "script";
var str3 = str1.concat(str2);
console.log(str3);
//OR
var str3 = str1 + str2 ;
console.log(str3);
//6) str.replace()
var str = "hello";
console.log(str.replace("h","f"));
var str = "hellolololo";
console.log(str.replaceAll("lo","p"))
//7) str.charAt(idx)
var str = "Ilove JS";
console.log(str.charAt(3));

/*Q) prompt the user to enter their full name. generate a username for them based on the input.
start username with @ ,followed by their fullname and ending with the fullname length
eg: username = "nehaIngale",username should be "@nehaIngale10"*/
let fullName = prompt("Enter Your Fullname: "); //nehaIngale
fullName.length; // 10
let add = "@"
newfullName = add.concat(fullName); // @nehaIngale
console.log(`${newfullName}${fullName.length}`) //@nehaIngale10

