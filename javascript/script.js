const signOnBtn = document.querySelector("#signOnBtn");


let menuBtn = document.querySelector("#menuBtn");
let searchBtn = document.querySelector("#searchBtn");
let joinBtn = document.querySelector("#joinBtn");

let signOnContainer = document.querySelector(".signOn-Container");

signOnBtn.addEventListener("click", signOnDropDown);

 function signOnDropDown(){
    signOnContainer.style.display = "flex";
    menuBtn.style.visibility = "hidden";
    searchBtn.style.visibility = "hidden";
    joinBtn.style.visibility ="hidden";
 }

