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
   
     
   if (menu.classList.contains("menuListShown")) {
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




/*
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


