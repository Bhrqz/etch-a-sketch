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
container.style.gridTemplateColumns="10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px" 
container.style.gridTemplateRows= "10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px 10px "



//array of divs
 // MANUAL WAY not in use: const divs = [creatingDivs(), creatingDivs()]
const divs = (Array(256).fill("creatingDivs()"))

//function maker of divs
function creatingDivs(i){
        const div = document.createElement("div")
            div.id="div"+i;
            div.onmouseover = function() {mouseOver(i)};
            div.onmouseout = function() {mouseOff(i)};
            div.style.height=10;
            div.style.width=10;
            return div
}

//turn strings into function calls
for(let i=0;i<256;i++){
     divs[i]=creatingDivs(i)
    }



//appendig divs
console.log(divs)
    divs.forEach((divs) => {container.appendChild(divs)})

//changing color Functions
function mouseOver(i){
    document.getElementById("div"+i).style.background = "#000"};
function mouseOff(i){
    document.getElementById("div"+i).style.background = "#FFF"};

    