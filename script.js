/* DOM : - Document Object MODEL , a html code can be acessed in JS through a object called 
document . this doccument object is a part of window object in the browser which contains 
html code all tags and info . this document obeject 
html in JS is acessed through command : ***  console.dir(window.document)  ***
DOM is a tree like structure:-
Tree Structure: The DOM represents the HTML document as a tree structure, where each element is
 a node. The top-level node is the document itself, and it branches out to elements like <html>, 
 <body>, and so on.
                                      Window
                                        |
                                    document
                                        |
                                       html
                                       / \
                                      /   \
                                head         body
                                  |          / \
            (meta,meta, title, link)     (div  script)
                                           |
                                   (h1, p, img, div)       */

 //1)Acessing element nodes in HTML
// let heading = document.getElementById("heading");
// console.dir(heading);                                
// let heading = document.getElementsByClassName("heading");
// console.dir(heading);


//                       ******** querySelector *******
//                  [ querySelctor ("myclass, myId , tag")]

let para = document.querySelector("p"); //first element of p return hoga
console.dir(para);

let allEl = document.querySelectorAll("p"); // all elements of p is returned
console.dir(allEl);              //querySelectorAll returns NodeList

let heading1 = document.querySelector(".heading");  //class is accessed using querySelector
console.dir(heading1);                              // class = .

let myId = document.querySelector("#myId");   // Id = #
console.dir(myId);
  // In DOM tree --> there are three nodes --> text , comment , elements
  
// let div = document.querySelector("div");
// console.dir(div);

//Q) write html tag h2 with text "hello javascript".append "from apna college students " using Js

let h2 = document.querySelector("h2");                       // 1)h2 ko access kiya
console.dir(h2);
h2.innerText = h2.innerText + " from apna college students"; // 2) what property to change--> innerText
console.dir(h2.innerText);                                   // 3) do change in property --> in this case concatenation 


let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText = "I love JS"
// divs[1].innerText = "I love CSS"
// divs[2].innerText = "I love HTML"

//using Loops
// let idex = 0;
// for (div of divs){
//   div.innerText = `This is box ${idex}`;
//   idex ++;
//}

//                              ***** DOM MANIPULATION part 2 ****
let divbox = document.querySelector("div");
console.log(divbox);
let id = divbox.getAttribute("id");
console.log(id);

let parah = document.querySelector("p");
console.log(parah);
let classofp = parah.getAttribute("class");
console.log(classofp);

//              ************ Direct manipulation in style using JS ********
let div = document.querySelector("div");
div.style.backgroundColor ="yellow";
div.innerText = "hello";
div.style.color = "black";
// div.style.visibility = "hidden";

//                *********  Insert Element using JS **********
let btn = document.createElement("button");    // step 1: Element create 
btn.innerText = "Submit";
console.log(btn);

let p = document.querySelector("p");   //p: here i'm adding elements with reference to node p    
                        // step 2: adding element in Dom tree
p.append(btn);          // adds button at the end of node inside node (p)
p.prepend(btn);         // adds button at the start of node inside node (p)
p.before(btn);          // adds button before  node outside node (p)
p.after(btn);           // adds button after  node outside node (p)


let addheading = document.createElement("h1");
addheading.innerHTML = "<i><u> hello Welcome all of you to learn javascript</u></i>";

document.querySelector("body").prepend(addheading);

/* Q) create a button elemnt .give it a text "Click me " ,background color "red",
text color as white. insert the button as first element in body tag.*/

let newbtn = document.createElement("button");
newbtn.innerText = " Click me! ";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector('body').prepend(newbtn);

/*create a p tag in html ,give it a class and some styling 
now create a new class in css and append this class to p element.
overwrite problem will occur : solve this using classList.*/

let ptag = document.querySelector("p"); 
//styling done in css file
let class_of_ptag = ptag.getAttribute("class");
console.log(class_of_ptag);

//using set attribute we try to add newclass in ptag
// ptag.setAttribute("class","newclass");

//we noticed that when we add new class in my p element using setAttribute 
// the previous class is overwrite by new one i.e class of p tag  changes to newclass 
//but we want both class in p tag therefore we use *** ( Class List ) ***

ptag.classList.add("newClass");
console.log(ptag.classList.contains("newClass"));
console.log(ptag.classList);