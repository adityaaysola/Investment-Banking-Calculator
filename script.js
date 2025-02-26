console.log("script loaded");

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("formulaButton") 
    button.addEventListener("click", clicked);
    function clicked(s) {
        const lol = document.getElementById("formulaClass").style.visibility == "hidden"; 
        if(lol == "hidden") {
            lol = "visible"; 
        }
        else {
            lol = "hidden"; 
        }
    }
});