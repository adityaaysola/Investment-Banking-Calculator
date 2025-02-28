document.addEventListener("DOMContentLoaded", function() {

    const formulaButton = document.getElementById("formulaButton"); 
    const calculateButton = document.getElementById("calculateButton"); 
    formulaButton.addEventListener("click", formulaClicked);
    calculateButton.addEventListener("click", calculateClicked); 
    
    function formulaClicked() {
        const formulaElement = document.getElementById("formulaClass");
    
        if (formulaElement.style.display === "none" || formulaElement.style.display === "") {
            formulaElement.style.display = "block";  // Show formula
        } else {
            formulaElement.style.display = "none";   // Hide formula
        }
    }

    function calculateClicked() {
        const i1 = document.getElementById("i1"); 
        const i2 = document.getElementById("i2"); 
        const i3 = document.getElementById("i3"); 
        const i4 = document.getElementById("i4"); 
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
        let A = p*(Math.pow(1+r/n, n*t));
        
    }
});


