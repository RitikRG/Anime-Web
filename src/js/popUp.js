const narutoPopUp = document.getElementById("narutoPopUp");
const narutoSeriesLogo= document.getElementById("narutoSeriesLogo");
const narutoSubSeriesLogo= document.getElementById("narutoSubSeriesLogo");
const narutoPopUpCloseIc= document.getElementById("narutoPopUpCloseIc");

const narutoShippudenPopUp = document.getElementById("narutoShippudenPopUp");
const narutoShippudenLogo= document.getElementById("narutoShippudenLogo");
const narutoSubShippudenLogo= document.getElementById("narutoSubShippudenLogo");
const narutoShippudenPopUpCloseIc= document.getElementById("narutoShippudenPopUpCloseIc");


const openNaruto=()=>{
    narutoPopUp.classList.remove("popUpInit");
    narutoPopUp.classList.remove("popUpCLose");
    narutoPopUp.classList.add("popUpOpen");
    narutoShippudenPopUp.classList.add("popUpInit")
}
const openNarutoShippuden=()=>{
    narutoShippudenPopUp.classList.remove("popUpInit");
    narutoShippudenPopUp.classList.remove("popUpCLose");
    narutoShippudenPopUp.classList.add("popUpOpen");
    narutoPopUp.classList.add("popUpInit")
}
const closeNaruto=()=>{
    narutoPopUp.classList.remove("popUpOpen");
    narutoPopUp.classList.add("popUpCLose");
    narutoShippudenPopUp.classList.add("popUpInit")
}
const closeNarutoShippuden=()=>{
    narutoShippudenPopUp.classList.remove("popUpOpen");
    narutoShippudenPopUp.classList.add("popUpCLose");
    narutoPopUp.classList.add("popUpInit")
}

narutoSeriesLogo.addEventListener('click', openNaruto);
narutoSubSeriesLogo.addEventListener('click', openNaruto);
narutoPopUpCloseIc.addEventListener('click', closeNaruto);

narutoShippudenLogo.addEventListener('click', openNarutoShippuden);
narutoSubShippudenLogo.addEventListener('click', openNarutoShippuden);
narutoShippudenPopUpCloseIc.addEventListener('click', closeNarutoShippuden);