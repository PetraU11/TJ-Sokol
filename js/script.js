let hamburger = document.getElementById("menuBars")
let menu = document.getElementById("menuList") 
let barOne = document.getElementById("bar1")
let barTwo = document.getElementById("bar2") 
let barThree = document.getElementById("bar3") 



hamburger.addEventListener("click", () => {
   if (menu.classList.contains("menuListShown")) {
    menu.classList.remove("menuListShown")
   } else {
     menu.classList.add("menuListShown")
   } 

   barOne.classList.add("first")
   barOne.style.marginTop = "-5px"
   barTwo.classList.add("second")
   barTwo.style.marginTop = "-5px"
   barThree.classList.add("third")
   barThree.style.marginTop = "-5px"

  
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


