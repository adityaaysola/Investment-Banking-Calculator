document.addEventListener("DOMContentLoaded", function() {

    const formulaButton = document.getElementById("formulaButton"); 
    const calculateButton = document.getElementById("calculateButton"); 
    const clearButton = document.getElementById("clearButton");
    const display = document.getElementById("answerLabel");  
    let alreadyCalculated = 0; 
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

    function detection() {
        if(i1.value != "" && i2.value != "" && i3.value != "" && i4.value != "") {
            return 1; 
        }
        else if (i1.value != "" || i2.value != "" || i3.value != "" || i4.value != ""){
            return 2; 
        }
    }

    function calculateClicked() {
        let value = detection(); 
        if(alreadyCalculated === 1) {
            alert("Already calculated! Please enter different values!"); 
        }
        else {
            if(value === 1) {
                alreadyCalculated = 1;
                const i1 = document.getElementById("i1"); 
                const i2 = document.getElementById("i2"); 
                const i3 = document.getElementById("i3"); 
                const i4 = document.getElementById("i4"); 
                let p = i1.value
                let n = i2.value
                let r = i3.value
                let t = i4.value
                let A = Math.round((p * Math.pow((1 + r / n), n * t))*100)/100;
                display.textContent = display.textContent.concat("Your final amount after compounded interest is: $", A);     
            }
            else {
                alert("Not enough data, please enter all values!"); 
            }
        }
    }

    function clearButtonClicked() {
            alreadyCalculated = 0; 
            i1.value = ""; 
            i2.value = ""; 
            i3.value = ""; 
            i4.value = ""; 
            display.textContent = " ";   
    }
});