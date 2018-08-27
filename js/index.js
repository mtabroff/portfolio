function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === ".topnav.links") {
        x.className += " responsive";
    } else {
        x.className = "topnav.links";
    }
}
