
//Hamburger menu click show/hide a animace ikony

let hamburger = document.getElementById("menuBars")
let menu = document.getElementById("menuList") 
let barOne = document.getElementById("bar1")
let barTwo = document.getElementById("bar2") 
let barThree = document.getElementById("bar3") 

hamburger.addEventListener("click", () => {
    barOne.classList.add("first")
    barOne.style.marginTop = "-5px"
    barTwo.style.display = "none"
    barThree.classList.add("third")
    barThree.style.marginTop = "-5px"
   
     
   if (menu.classList.contains("menuListShown") ) {
    menu.classList.remove("menuListShown")
    barOne.classList.remove("first")
    barOne.style.marginTop = "10px"
    barTwo.style.display = "block"
    barThree.classList.remove("third")
    barThree.style.marginTop = "10px"
   
   } else {
     menu.classList.add("menuListShown")
   } 
   
})

// Odstranit .menuListShown nad 700px a bars do původní polohy při přechod zpět pod 700px

let removeClass = () => {
    if(window.innerWidth > 699){
        menu.classList.remove("menuListShown")
    } else if ( window.innerWidth < 700){
        barOne.classList.remove("first")
        barOne.style.marginTop = "10px"
        barTwo.style.display = "block"
        barThree.classList.remove("third")
        barThree.style.marginTop = "10px"
    }}

window.addEventListener("resize", removeClass)
removeClass()


// Výměna šipek pod/nad 700px 

let arrow1 = document.getElementById("arrow1")
let arrow2 = document.getElementById("arrow2")

const arrowColor = () => {
    if (window.innerWidth < 700){
        arrow1.src = "images/sipka-bila-16.png"
        arrow2.src = "images/sipka-bila-16.png"
 }else {
    arrow1.src = "images/sipka-cerna-16.png"
    arrow2.src = "images/sipka-cerna-16.png"
 }}
window.onload = arrowColor;
window.onresize = arrowColor;



// Navigace - kde je uživatel, označení červenou barvou

const menuButton = document.getElementById("menuLinkActive")
menuButton.classList.add(".menu__link.active");

// Submenu u O sokolu a Cvičení click show/hide 

const subMenuSokol = document.getElementById("menuLinkSubSokol")
subMenuSokol.addEventListener("click",() => {
    if(document.getElementById("menuListSubmenu").style.display === "block"){
        document.getElementById("menuListSubmenu").style.display = "none"
    } else { 
    document.getElementById("menuListSubmenu").style.display = "block";
    document.getElementById("menuListSubmenu2").style.display = "none"
    }
})

const subMenuCviceni = document.getElementById("menuLinkSubCviceni")
subMenuCviceni.addEventListener("click",() => {
   if (document.getElementById("menuListSubmenu2").style.display === "block"){
    document.getElementById("menuListSubmenu2").style.display = "none"
} else { document.getElementById("menuListSubmenu2").style.display = "block"
document.getElementById("menuListSubmenu").style.display = "none"}
})








/*
const subMenuCviceni = document.getElementById("menuLinkSubCviceni")
subMenuCviceni.addEventListener("click",() => {
    document.getElementById("menuListSubmenu2").style.display = "block";}
)



menu.innerHTML += ` <p class="menu__item-phone"> +420 720 966 703 </p>
   <a href="https://www.facebook.com/tjsokolkromeriz"> <img class="menu__item-fb" src="images/facebook-white-32.png" alt="logo facebook"> </a>`



hamburger.addEventListener("click", () => {
    menu.classList.add("menuListShown")
    
})
const para = document.createElement("p")
   const node = document.createTextNode("+420 720 966 703")
   para.appendChild(node)
    menu.appendChild(para)


*/