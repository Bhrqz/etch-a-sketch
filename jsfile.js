//Setting bigDiv
const bigDiv = document.querySelector("#bigDiv")
bigDiv.style.width = "100%";

//ccontainer
const ccontainer = document.querySelector("#ccontainer")
ccontainer.style.display="grid";
ccontainer.style.justifyContent="center"
ccontainer.style.backgroundColor="#0F9";



//div button CahngeSize
const buttonChange = document.getElementById("#buttonDiv")
buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
buttonDiv.style.alingItems = "center"



//button changeSize
const button = document.querySelector('#button');
button.style.marginBottom =15;

//title 
const title = document.getElementById("#title");
title.style.textAlign = "center"
title.style.marginTop= 30;

//div container
const container = document.querySelector("#container")
container.style.display= "grid"
//container.style.backgroundColor="gray"
container.style.width=480;  //FOR SOME REASON THERE IS NOT CENTERED WHEN ACTIVATED
container.style.height=480;
container.style.justifyContent= "center"
container.classList.add("container")
container.style.gridTemplateColumns= `repeat(16, 1fr)`;
container.style.gridTemplateRows= `repeat(16, 1fr)`;


function mainSetting(size){
        console.log(size);

        container.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows= `repeat(${size}, 1fr)`;

        //array of divs
        // MANUAL WAY not in use: const divs = [creatingDivs(), creatingDivs()]
        const divs = (Array(size*size).fill("creatingDivs()"))

        //function maker of divs
        function creatingDivs(i, size){
                const div = document.createElement("div")
                    div.id="div"+i;
                    div.style.backgroundColor="#FFF"
                    div.onmouseover = function() {mouseOver(i)};
                    //div.onmouseout = function() {mouseOff(i)};  IN CASE IF YOU WANT NOT LEAVE TRACE
                    div.style.height=1/size;
                    div.style.width=1/size;
                    //div.classList.add("square"); Class JUST IN CASE
                    return div
        }

        //turn strings into function calls
        for(let i=0;i<size*size;i++){
            divs[i]=creatingDivs(i)
            }
        console.log(divs)
        //appendig divs

            divs.forEach((divs) => {container.appendChild(divs)})

        //changing color Functions
        function mouseOver(i){
            document.getElementById("div"+i).style.background = "#000"};
        function mouseOff(i){
            document.getElementById("div"+i).style.background = "#FFF"};
}

//Click en ChangeSize Button
document.getElementById("button").addEventListener("click", gettingNewGrid);

function gettingNewGrid(divs) {
        let asking = prompt("How many squares per size do you want?", 16);
            if (asking == "" || isNaN(asking) || asking===null){
                alert("Hit Change Size button and make a new canvas");
            } 
            else{container.innerHTML="";
                alert("Your new canvas will have "+asking+" squares per side. Nice!");
                size = asking;
                console.log(asking);
                console.log(size);
                mainSetting(size);
                }};

/*function makeNewDivs(size){
    const divs2 = (Array(size*size).fill("creatingDivs()"));
    for(let i=0;i<size*size;i++){
        divs2[i]=creatingDivs(i)
       }
    console.log(divs2);
    divs2.forEach((divs) => {container.appendChild(divs)})
    };
*/
    mainSetting(16);
