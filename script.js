document.addEventListener("DOMContentLoaded", function() {

    const formulaButton = document.getElementById("formulaButton"); 
    const calculateButton = document.getElementById("calculateButton"); 
    formulaButton.addEventListener("click", formulaClicked);
    calculateButton.addEventListener("click", calculateClicked); 
    
    function formulaClicked() {
        const formulaButton = document.getElementById("formulaClass");
        if(formulaButton.style.visibility == "hidden") {
            document.getElementById("formulaClass").style.visibility = "visible"; 
        }
        else {
            document.getElementById("formulaClass").style.visibility = "hidden"; 
        }
    }

    function calculateClicked() {
        console.log("pp")
        const p = document.getElementById("i1"); 
        const n = document.getElementById("i2"); 
        const r = document.getElementById("i3"); 
        const t = document.getElementById("i4"); 
        let v1 = i1.value
        let v2 = i2.value
        let v3 = i3.value
        let v4 = i4.value
        i1.value = ""; 
        i2.value = ""; 
        i3.value = ""; 
        i4.value = ""; 
        let A = P*(Math.pow(1+r/n, nt));
        
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el) => {
        el.classList.add("appear");
    });
});