let hamburger = document.getElementById("menuBars")
let menu = document.getElementById("menuList") 

hamburger.addEventListener("click", () => {
   if (menu.classList.contains("menuListShown")) {
    menu.classList.remove("menuListShown")
   } else {
     menu.classList.add("menuListShown")
   } 
})


/*


hamburger.addEventListener("click", () => {
    menu.classList.add("menuListShown")
    
})

*/


