(function(){
    "use strict";
    console.log("testing js");

    const hamburger = document.querySelector("#hamburger");
    const dropdown = document.querySelector(".navigation");

    hamburger.addEventListener("click", function(){
        dropdown.classList.toggle("aboveScreen");
    });
   

})();