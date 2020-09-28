toggleNav = (navName) => {
    let height = "";
    if (document.getElementById(navName)) {
        height = document.getElementById(navName).style.height;
        if (height == "0%" || height == "") {
            document.getElementById(navName).style.height = "100%";
            document.getElementById("footer-menu-popup").style.backgroundColor = "rgba(0,0,0, 0.8)";
        } else {
            document.getElementById(navName).style.height = "0%";
            document.getElementById("footer-menu-popup").style.backgroundColor = "rgba(0,0,0, 0)";
        }
        console.log(document.getElementById(navName).style.height)
    }
}

openNav = (navName) => {
    document.getElementById(navName).style.height = "100%";
  }
  
closeNav = (navName) => {
    document.getElementById(navName).style.height = "0";
  }