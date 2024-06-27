// Q) Print all even numbers from 0 to 100.
for (let i = 1;i<=100;i++){
    if(i%2==0){
        console.log(i); 
    }
}

/*# Q) CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER.
ASK THE USER TO KEEP GUESSING THE NUMBER UNTIL USER ENTERS THE CORECT NUMBER */
let gameNum = 7;
let guessNum = prompt("Guess the number: ");
console.log(guessNum);
while(gameNum != guessNum){ //prompt always returns String therefore, !== is not valid since it is matching 7 assuming it is string --> error
    guessNum = prompt("You guessed Wrong Num, Guess Again: ") 
}
console.log("Congratualations !!  You entered correct Number: ",guessNum);



// Q) print sum of first n numbers
let sum = 0;
let n = prompt("Enter the number : ");
for (let i = 1;i<=n;i++){
    sum+=i;
}
console.log(`sum of first ${n} numbers is : ${sum}`);

// #For - of loop used for String & Arrays
//1)
let str1 = "neha ingale";
for(let i of str1){ // i is iterator which takes characters
    console.log("i = ",i);
}

//2) print sizee of string using for-of loop
let str = "Javascript";
let size = 0;
for(let i of str){ // i is iterator which takes characters
    console.log("i = ",i);
    size++;
}
console.log("size of string is: ",size);

// #For - in loop is used for Objects & Arrays 
let student = {
    name: "Kabir kumar",
    age: 20,
    cgpa : 8.8,
    isPass: true,
};
for (let i in student){ //for - in  loop --> returns object Key value
    console.log("i = ",i);
 }
            //OR

// to print key with value
for (let key in student){ //for - in  loop --> returns object Key value
    console.log("key = ",key, "value = ",student[key]);
 }






