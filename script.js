alert("hi how are you doing")
console.log("script loaded");
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("formulaButton") 
    button.addEventListener("click", clicked);
    function clicked() {
        alert("hi")
    }
});