const signOnBtn = document.querySelector("#signOnBtn");
const menuOption = document.querySelector("#menuOption");

let menuBtn = document.querySelector("#menuBtn");
let searchBtn = document.querySelector("#searchBtn");
let joinBtn = document.querySelector("#joinBtnHidden");
let signOnBtnClicked = document.querySelector("#signOnBtnChange");

let signOnContainer = document.querySelector(".signOn-Container");

let menuOpen = document.querySelector(".menu-container");

let menuBtn1 = document.querySelector("#menuBtn1");
let searchBtn1 = document.querySelector("#searchBtn1");
let joinBtn1 = document.querySelector("#joinBtnHidden1");
let menuCloseBtnClicked = document.querySelector("#signOnBtnChange1");

signOnBtn.addEventListener("click", signOnDropDown);

 function signOnDropDown(){
    signOnContainer.style.display = "flex";
    signOnBtnClicked.style.backgroundColor = "#333333";
    menuBtn.style.visibility = "hidden";
    searchBtn.style.visibility = "hidden";
    joinBtn.style.visibility = "hidden";
 }

signOnBtnClicked.addEventListener("click", closedOverlay);
function closedOverlay(){
   signOnContainer.style.display = "none";
}

menuOption.addEventListener("click", menuOverlay);
function menuOverlay(){
      menuOpen.style.display = "flex";
      menuCloseBtnClicked.style.backgroundColor = "#333333";
      menuBtn1.style.visibility = "hidden";
      searchBtn1.style.visibility = "hidden";
      joinBtn1.style.visibility = "hidden";
      console.log("Called is eventListener");
}

menuCloseBtnClicked.addEventListener("click", closeMenuOverlay);
function closeMenuOverlay(){
   menuOpen.style.display = "none";
}