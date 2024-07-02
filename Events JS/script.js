/* Events :- the change in the state of an object is known as events
these are used to trigger specific changes in code while execution 

In JavaScript, events are actions or occurrences that happen in the browser, which the browser can respond to. These can be things the user does or things that happen in the system.

Here are a few key points to understand:

** User Actions: Common events include actions like clicking a button, moving the mouse, typing on the keyboard, or submitting a form.

** System Actions: These can include loading a webpage, resizing the browser window, or finishing a page load.

** Event Listeners: To respond to an event, you use an event listener. An event listener is a function that waits for an event to occur and then runs a block of code in response.

Common Event Types:
Mouse Events: click, dblclick, mouseover, mouseout, mousemove, etc.
Keyboard Events: keydown, keyup, keypress.
Form Events: submit, change, focus, blur.
Window Events: load, resize, scroll.*/

/*                inline event handling :- events are written inside html tags 

<button onclick="console.log('Button was clicked'); alert('hello welcome to learn JS')">click me!</button>

//here we wrote a event "onclick" which handles the event on element "button" this is event handling.*/

//                             *** Event Handling ***
            /*node.event =()=>{
              handles here;
            }*/

let btn = document.querySelector("#btn");  //element was acessed

btn.onclick = ()=>{                       //on btn node onclick event is performed since, it 
    console.log("button was clicked");    //is a function it executes action under it .
}
//NOTE : 1) if we write event in inline & event in JS then priority is given to event in js .
//     : 2) if once a event is handled then rewriting it again creates overwrite problem.


//                        ******   Event object  ******
// it is a special object that has a information about the event 
//All event handlers have access to event object properties and methods.

let p = document.querySelector('p'); 
p.onmouseover =(evt)=>{                          // evt is EVENT OBJECT which has all details
    console.log(evt);                            // of element p 
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);
}

//                     ***** Event Listeners *****

//   Node.addEventListener(event, callbackfunction);

let btn1 = document.querySelector("#btn1");

let button = ()=>{
    alert("Button was clicked");
};
btn1.addEventListener("click",button); 

btn1.addEventListener("click", (evt)=>{  //in Eventlistners event object are also passed as
    alert("Button was clicked");         //function
    console.log(evt);  
})

// Node.removeEventListener( event, callbackfunction);
//note: callbackfunction should be same to remove.

btn1.removeEventListener("click",button); //here function is passed as a variable 

/// Q)Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.
// 1st method
// let togglebtn = document.querySelector("#toggle");
// let body = document.querySelector("body");
// p.after(togglebtn);
// let currentmode = "light";
// togglebtn.addEventListener("click",()=>{
//   if(currentmode === "light"){
//     currentmode = "dark";
//     body.style.backgroundColor = "black";

// }else{
//     currentmode = "light";
//     body.style.backgroundColor = "white";
// }
// console.log(currentmode);
// });

// 2nd method: we add class in css and access them using classlist
let togglebtn = document.querySelector("#toggle");
let body = document.querySelector("body");
p.after(togglebtn);
let currentmode = "light";
togglebtn.addEventListener("click",()=>{
  if(currentmode === "light"){
    currentmode = "dark";
    body.classList.add("dark");   
    body.classList.remove("light");
}else{
    currentmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log(currentmode);
});