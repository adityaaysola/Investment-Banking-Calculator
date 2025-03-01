document.addEventListener("DOMContentLoaded", function() {

    const formulaButton = document.getElementById("formulaButton"); 
    const calculateButton = document.getElementById("calculateButton"); 
    const clearButton = document.getElementById("clearButton"); 
    let clearStatus = 0; // 0 means it does not need to be cleared, 1 means it needs to be cleared
    formulaButton.addEventListener("click", formulaClicked);
    calculateButton.addEventListener("click", calculateClicked); 
    clearButton.addEventListener("click", clearButtonClicked); 

    function formulaClicked() {
        const formulaElement = document.getElementById("formulaClass");
    
        if (formulaElement.style.display === "none" || formulaElement.style.display === "") {
            formulaElement.style.display = "block";  // Show formula
        } else {
            formulaElement.style.display = "none";   // Hide formula
        }
    }

    function calculateClicked() {
        if(clearStatus === 0) {
            alert("No data, please enter values!"); 
        }
        else {
            clearStatus = 1; 
            const i1 = document.getElementById("i1"); 
            const i2 = document.getElementById("i2"); 
            const i3 = document.getElementById("i3"); 
            const i4 = document.getElementById("i4"); 
            const display = document.getElementById("answerLabel"); 
            let p = i1.value
            let n = i2.value
            let r = i3.value
            let t = i4.value
            let A = p*(Math.pow(1+r/n, n*t));
            display.textContent = display.textContent.concat("your final amount after compounded interest is: ", A);     
        }
    }

    function clearButtonClicked() {
        if(clearStatus === 1 || i1.value != "" || i2.value != "" || i3.value != "" || i4.value != "") {
            i1.value = ""; 
            i2.value = ""; 
            i3.value = ""; 
            i4.value = ""; 
            display.textContent = " ";   
            clearStatus = 0; 
        }
        else {
            alert("Already cleared! Enter values"); 
        }

    }
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el) => {
        el.classList.add("appear");
    });
});