function printname(name){ // name --> parameter --> input to function
    console.log(name); // printname --> function name
}
printname("neha"); // neha -- > Argument passed to function call.


function sum(x,y){// --> function param x & y are local variables --> scope of these variable is within the block of code
    s = x+y;
    return s;  //--> functon returns the value of x+y // return keyword ,returns value of single variable only it can be array,string.
}
let result = sum(3,4);
console.log(result);

//                                 *** ARROW Function ***

const arrorsum = (a,b)=>{
    console.log(a + b);
}
// console.log(arrorsum); //---> gives value of whole function
arrorsum(5,4);

const arrormul = (a,b)=>{
    console.log(a * b);
}
// console.log(arrorsum); //---> gives value of whole function
arrormul(5,4);

const printhello =()=>{ // --> without any argument also it prints the statement
    console.log("hello");
}

// function countvowel(str){
//     let count = 0;
//     for (let char of str){
//         if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
//            count++;
//         }
//     }
//     console.log(count); // or return count;
// }
// countvowel("hello");

const countvowel1=(str)=>{
    let count = 0;
    for (let char of str){
        if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
           count++;
        }
    }
   return count;
};
console.log(countvowel1("hello"));

//                             *****   forEach Loop    ******

//1) forEach (callbackfunction)                          .  [USED ON ARRAY]   .
let arr = [1,2,3,4,5];
arr.forEach(function printval (val){ //printval --> callback function --> function having another function as parameter
     console.log(val);
});

//2) Using arrow func
let arr1 = [1,2,3,4,5];            
arr.forEach((val)=>{               
    console.log(val);
}
);
 //NOTE: forEach function has callbackfunction within which there is:- (value,index,array)
let numbers = [2,4,5,6,8,10];
numbers.forEach((val,idx,numbers)=>{
    console.log(val,idx,numbers);
});

//                         ******Higher Order Functions******

/*HOF or HOM : - these are the function which take Another functions as parameter
 or returns another fuction value as output [forEach is a HOF or HOM]*/

//Q) for a given array of numbers ,print the square of value using ForEach function

let numb = [2,3,4,5,6];
numb.forEach((val)=>{
    console.log(val*val);
}

);

//the 2nd method to write this is:-
let numb1 = [2,3,4,5,6];
 let squareofnum = (num)=>{ //squareofnum is a variable which has function defination
    console.log(num*num);
 }

numb1.forEach(squareofnum); //forEach function MAI squareofnum is a callback function.

//                                **** Map Function****

// [similar to forEach function ,DIFF IS it creates new array for returned value of callbackfunc]
let numbmap= [2,3,4,5,6];
let newarr = numbmap.map((val)=>{ //numbmap.map returns value which is stored in newarr as new array value
    return val * val;
});
console.log(newarr);

//                               ***** filter function **** 

// [this func stores the filtered val from original arr if condition of callbackfunc is true]
let nums = [1,2,3,4,5,6,7,8];
let evenArr = nums.filter((val)=>{
    return val % 2 === 0;
});
console.log (evenArr);

//                              **** reduce function **** --> used when at input there is more values but at output we need single value only.

//[performs some operation & reduces the array to single value ,then returns that value as output.]
let array = [1,2,3,4];
let output= array.reduce((prev , curr)=>{ // prev ,curr --> prev stores result of operation & gets updated while current travels the array.
    // return prev + curr;   // calculates the sum of array.
    return prev  > curr ? prev : curr;  // calculates the largest value in array.

})
console.log(output);

//Q)take array of  marks of a student & using filter func ,calculate 90+ array.
let marks = [56,78,90,89,76,88,91,92,95,96];
let output1 = marks.filter((val)=>{
    return val > 90 ;
});
console.log (output1);

//Q)take input n from user ,create array frm 1 to n 
let n = prompt("Enter the num: ");
let arrnum = [];
for(let i = 1; i<= n ; i++){
    arrnum[i-1] = i; // i = 1,arrnum[0]<-- index; i = 2,arrnum[1]<-- index ; i = 3,arrnum[2]<-- index
}
console.log(arrnum);

//use reduce method to print sum of num in array
let sum1 = arrnum.reduce((prev , curr) => {
    return prev + curr;
});
console.log("sum of array is : ",sum1);

//use reduce method to print product of num in array
let product = arrnum.reduce((prev , curr) => {
    return prev * curr;
});
console.log("product of array is: ",product);