const menuToggle = document.getElementById("hamMenu");
const redBg = document.getElementById("redBg");
const whiteBg = document.getElementById("whiteBg");
const closeIc = document.getElementById("closeIc");


const openingMenu =()=>{
    redBg.classList.add("openMenu");
    redBg.classList.remove("closedMenu");
    redBg.classList.remove("closingMenu");
    whiteBg.classList.add("openMenu");
    whiteBg.classList.remove("closedMenu");
    whiteBg.classList.remove("closingMenu");
}

const closingMenu=()=>{
    redBg.classList.add("closingMenu");
    redBg.classList.remove("openMenu");
    whiteBg.classList.add("closingMenu");
    whiteBg.classList.remove("openMenu");
}

menuToggle.addEventListener("click", openingMenu);
closeIc.addEventListener("click", closingMenu);