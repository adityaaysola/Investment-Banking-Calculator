document.getElementById("formulaClass").style.visibility = "hidden"; 

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("formulaButton") 
    button.addEventListener("click", clicked);
    function clicked() {
        const formulaButton = document.getElementById("formulaClass");
        if(formulaButton.style.visibility == "hidden") {
            document.getElementById("formulaClass").style.visibility = "visible"; 
        }
        else {
            document.getElementById("formulaClass").style.visibility = "hidden"; 
        }
    }
});