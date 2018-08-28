
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);



function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "links") {
       x.className += " responsive";
   } else {
       x.className = "links";
   }
};
