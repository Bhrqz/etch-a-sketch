//Setting bigDiv
const bigDiv = document.querySelector("#bigDiv")
bigDiv.style.marginLeft= "auto";
bigDiv.style.marginRight = "auto";
bigDiv.style.width = "100%";
bigDiv.style.alignContent = "center";

//div button CahngeSize
const buttonChange = document.getElementById("#buttonDiv")
buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
buttonDiv.style.alingItems = "center"



//button changeSize
const button = document.querySelector('#button');
button.style.marginBottom =10;

//title 
const title = document.getElementById("#title");
title.style.textAlign = "center"
title.style.marginTop= 30;



//div container
const container = document.querySelector("#container")
container.style.display= "grid"
container.style.backgroundColor="gray"
container.style.justifyContent= "center"
container.style.gridTemplateColumns= "repeat(16, auto)";


//OneSide number of squares
let a = 16;

//array of divs
 // MANUAL WAY not in use: const divs = [creatingDivs(), creatingDivs()]
const divs = (Array(a*a).fill("creatingDivs()"))

//function maker of divs
function creatingDivs(i){
        const div = document.createElement("div")
            div.id="div"+i;
            div.style.backgroundColor="#FFF"
            div.onmouseover = function() {mouseOver(i)};
            //div.onmouseout = function() {mouseOff(i)};  IN CASE IF YOU WANT NOT LEAVE TRACE
            div.style.height=40;
            div.style.width=40;
            return div
}

//turn strings into function calls
for(let i=0;i<a*a;i++){
     divs[i]=creatingDivs(i)
    }

//appendig divs

    divs.forEach((divs) => {container.appendChild(divs)})

//changing color Functions
function mouseOver(i){
    document.getElementById("div"+i).style.background = "#000"};
function mouseOff(i){
    document.getElementById("div"+i).style.background = "#FFF"};

//Click en ChangeSize Button
document.getElementById("button").addEventListener("click", gettingNewGrid);

let size=0;

function gettingNewGrid() {
    let asking = prompt("How many squares per size do you want?", 16);
            if (asking == "" || isNaN(asking)){
                alert("Hit Change Size button and make a new canvas");
            } 
            else{divs.forEach((divs) => {container.innerHTML =""});
                alert("Your new canvas will have "+asking+" squares per side. Nice!")
                size = asking
                console.log(asking);
                console.log(size);
                makeNewDivs(size);
                }}

function makeNewDivs(size){
    const divs2 = (Array(size*size).fill("creatingDivs()"));
    for(let i=0;i<size*size;i++){
        divs2[i]=creatingDivs(i)
       }
    console.log(divs2);
    divs2.forEach((divs) => {container.appendChild(divs)})
    }
