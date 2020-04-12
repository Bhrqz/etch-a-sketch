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
container.style.gridTemplateColumns= "10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px "


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
            div.style.height=10;
            div.style.width=10;
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
let asking = 0

document.getElementById("button").addEventListener("click", function(){
    a=0;
    asking = prompt("How many square per side do you want?", "16");
    if(asking==NaN||asking==null){
        asking = prompt("Please enter a valid positive number", "16");
    }
        else {;
            a=asking;
            return asking};
})
console.log(asking);
