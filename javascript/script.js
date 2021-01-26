const signOnBtn = document.querySelector("#signOnBtn");
const menuOption = document.querySelector("#menuOption");

let menuBtn = document.querySelector("#menuBtn");
let searchBtn = document.querySelector("#searchBtn");
let joinBtn = document.querySelector("#joinBtnHidden");
let signOnBtnClicked = document.querySelector("#signOnBtnChange");

let signOnContainer = document.querySelector(".signOn-Container");

let menuOpen = document.querySelector(".menu-container");
let menuHeader = document.querySelector("#menuHeader");
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
      menuCloseBtnClicked.style.backgroundColor = "#ffffff";
      menuCloseBtnClicked.style.color = "#808080";
      menuHeader.style.backgroundColor ="#ffffff";
      menuBtn1.style.visibility = "hidden";
      searchBtn1.style.visibility = "hidden";
      joinBtn1.style.visibility = "hidden";

}

menuCloseBtnClicked.addEventListener("click", closeMenuOverlay);
function closeMenuOverlay(){
   menuOpen.style.display = "none";
}




let menuLeftChoices = document.querySelectorAll(".menuChoices button");
//Controls the active menu option selected
for (var i = 0; i<menuLeftChoices.length; i++){
   menuLeftChoices[i].addEventListener("click", function(){ 
      let current = document.querySelector(".active");     
      current.classList.remove("active");
      this.classList.add("active");
      menuSubList();
   });
   
}

function menuSubList(){
 console.log("Called this function");
 let middleChoice1 = document.querySelector("#middleChoice1");
 let middleChoice2 = document.querySelector("#middleChoice2");
 let middleChoice3 = document.querySelector("#middleChoice3");
 let middleChoice4 = document.querySelector("#middleChoice4");
 let middleChoice5 = document.querySelector("#middleChoice5");
 let middleChoice6 = document.querySelector("#middleChoice6");

 for (var i = 0; i<menuLeftChoices.length; i++){
   
    if(menuLeftChoices[i].classList.contains("active")){
      console.log(i);
         //Accounts option selected
         if(i === 0) {
            middleChoice1.textContent = "No Fee Chequing";
            middleChoice2.textContent = "High Interest Savings";
            middleChoice3.textContent = "View All";
            middleChoice4.textContent = "";
            middleChoice5.textContent = "";
            middleChoice6.textContent = "";

            rightChoice1.textContent = "Today's Rate";
            rightChoice2.textContent = "";
            rightChoice3.textContent = "";
            rightChoice4.textContent = "";
            rightChoice5.textContent = "";
            
         }
         //Credit card option selected
         else if(i === 1) {
            middleChoice1.textContent = "Cash Back Visa";
            middleChoice2.textContent = "";
            middleChoice3.textContent = "";
            middleChoice4.textContent = "";
            middleChoice5.textContent = "";
            middleChoice6.textContent = "";

            rightChoice1.textContent = "Frequently asked questions";
            rightChoice2.textContent = "Forms and downloads";
            rightChoice3.textContent = "";
            rightChoice4.textContent = "";
            rightChoice5.textContent = "";
         }
         else if(i === 2) {
            middleChoice1.textContent = "Explore Mortgages";
            middleChoice2.textContent = "";
            middleChoice3.textContent = "";
            middleChoice4.textContent = "";
            middleChoice5.textContent = "";
            middleChoice6.textContent = "";

            rightChoice1.textContent = "Learn about home buying";
            rightChoice2.textContent = "Switch your mortgage";
            rightChoice3.textContent = "Manage your mortgage";
            rightChoice4.textContent = "Mortgage prepayment";
            rightChoice5.textContent = "Mortgage rates";
         }
         else if(i === 3) {
            middleChoice1.textContent = "Personal Line of Credit";
            middleChoice2.textContent = "Secured Line of Credit";
            middleChoice3.textContent = "Personal Loan";
            middleChoice4.textContent = "Creditor Insurance";
            middleChoice5.textContent = "View all";
            middleChoice6.textContent = "";

            rightChoice1.textContent = "Today's rate";
            rightChoice2.textContent = "";
            rightChoice3.textContent = "";
            rightChoice4.textContent = "";
            rightChoice5.textContent = "";
         }
         else if(i === 4) {
            middleChoice1.textContent = "RRSP Savings Account";
            middleChoice2.textContent = "GICs";
            middleChoice3.textContent = "Tax-Free Savings Account";
            middleChoice4.textContent = "Mutual Fund Accounts";
            middleChoice5.textContent = "View all";
            middleChoice6.textContent = "";

            rightChoice1.textContent = "Retirement plans";
            rightChoice2.textContent = "Education plans";
            rightChoice3.textContent = "Today's rates";
            rightChoice4.textContent = "";
            rightChoice5.textContent = "";
         }
         else if(i === 5) {
            middleChoice1.textContent = "Join Simplii";
            middleChoice2.textContent = "Ways to Bank";
            middleChoice3.textContent = "INTERAC e-transfer";
            middleChoice4.textContent = "Mobile Payment";
            middleChoice5.textContent = "Global Money Transfer";
            middleChoice6.textContent = "Foreign Cash";

            rightChoice1.textContent = "Frequently asked questions";
            rightChoice2.textContent = "Today's rates";
            rightChoice3.textContent = "Forms and downloads";
            rightChoice4.textContent = "Living Simplii";
            rightChoice5.textContent = "Resources for seniors";
         }
         
        
   
      } 
    }
}


let searchBtnSelected = document.querySelector("#searchBtnSelected");
let searchContainer = document.querySelector(".search-container");

let menuBtn2 = document.querySelector("#menuBtn2");
let searchBtn2 = document.querySelector("#searchBtn2");
let joinBtnHidden2 = document.querySelector("#joinBtnHidden2");
let signOnBtnChange2 = document.querySelector("#signOnBtnChange2");


searchBtnSelected.addEventListener("click", searchOverlay);
function searchOverlay()
{
   searchContainer.style.display = "flex";
   signOnBtnChange2.style.backgroundColor ="#333333";
   menuBtn2.style.visibility = "hidden";
   searchBtn2.style.visibility = "hidden";
   joinBtnHidden2.style.visibility = "hidden";
}

signOnBtnChange2.addEventListener("click", closeSearchOverlay);
function closeSearchOverlay(){
   searchContainer.style.display = "none";
}