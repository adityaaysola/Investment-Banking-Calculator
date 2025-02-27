document.addEventListener("DOMContentLoaded", function() {
    const formulaButton = document.getElementById("formulaButton"); 
    const calculateButton = document.getElementById("calculateButton"); 
    formulaButton.addEventListener("click", formulaClicked);
    calculateButton.addEventListener("click", calculateClicked); 
    
    function formulaClicked() {
        const formulaButton = document.getElementById("formulaClass");
        if(formulaButton.style.visibility == "hidden") {
            document.getElementsByClassName("formulaClass").style.visibility = "visible"; 
        }
        else {
            document.getElementsByClassName("formulaClass").style.visibility = "hidden"; 
        }
    }

    function calculateClicked() {
        console.log("pp")
        const i1 = document.getElementById("i1"); 
        const i2 = document.getElementById("i2"); 
        const i3 = document.getElementById("i3"); 
        const i4 = document.getElementById("i4"); 
        let v1 = i1.value
        let v2 = i2.value
        let v3 = i3.value
        let v4 = i4.value
        i1.value = ""; 
        i2.value = ""; 
        i3.value = ""; 
        i4.value = ""; 
    }
});


