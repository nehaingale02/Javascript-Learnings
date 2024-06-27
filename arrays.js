//create a array of marks of student
let marks = [34,56,56,7,,8,9,33];       // Arrays: COllection OF Similar Items
console.log(marks);                     //NOTE: Arrays are Objects ,its type is object.
marks[0] = 33;                          // Arrays are muttable. // Array is index:value pair 
                                        // Object is key:value 
                                        // Values in Array is stored in Linear fashion
                                        // Array --> Zero indexed
console.log(marks[0]);   
console.log(marks[2]);   
console.log(marks[3]);                                     

                //** LOOPING OVER AN ARRAY:-
//for loop
var arr = [1,2,3,4,5];
for (let i = 0 ; i<arr.length; i++){ // Array i(index) is never (<=) arr.length ,it is always (<) arr.length
    console.log(arr[i]);
}
//for-of loop
let cities = ["pune","mumbai","delhi","gurgaon"];``
for(let city of cities){
    console.log(city);
}
// print Average marks of entire class 
var stumarks=[56,78,86,76,45,34];
let sum = 0;
for(let i of stumarks){
    sum+=i;
}
let avg = sum/stumarks.length;
console.log(`average of an array is : ${avg}`);

/* for a given array of price of 5 items,apply 10% off on each item and change array items 
and store this off values*/
// let items= [250,645,300,900,50];
// let i = 0;
// for (let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
  
//     console.log(`array of items after applying offer is: ${items[i]}`);
//     i++;
// }
// console.log(items);

//2nd method
let items1= [250,645,300,900,50];
for(let i = 0 ; i<items1.length; i ++){
    let offer = items1[i] / 10;
    items1[i]-=offer;
}
console.log(items1);

                        // ** ARRAY METHODS IN JS
//1) push() --> add element from end
var fooditems = ["mushroom","peanuts","milk","cabbage","apple"];
fooditems.push("potato");
console.log (fooditems);

//2)pop()--> delete element frm end & return
var fooditems = ["mushroom","peanuts","milk","cabbage","apple"];
fooditems.pop(); //-->apple ko delete kardiya 
console.log (fooditems);

//3) toString() --> convert array to string
var num = [1,2,3,44,5,6,7];
console.log(num.toString());

//4) concat --> joins multiple array and returns result --> gives new array i.e no change in original array
let colours = ["red","blue","pink","white"];
let pen =["ball ", "gel"];
let newarr = colours.concat(pen);
console.log(newarr);

//5)unshift --> act as push method ,it add elements to start of array
var festival = ["holi","diwali","dhanteras"];
festival.unshift("navratri");
console.log(festival);

//6)shift --> act as pop , delete items from start and return
var festival = ["holi","diwali","dhanteras"];
festival.shift();
console.log(festival);

//7) slice --> same as studied in string 
var festival = ["holi","diwali","dhanteras","pongal"];
console.log(festival.slice(1,2));

//8) splice --> change original array  to (add,remove,replace)
// splice --> splice(startidx,delcount,newelement) 
var numb= [1,2,3,4,5,6,7,8];
numb.splice(0,3,20,30,40);
console.log(numb);