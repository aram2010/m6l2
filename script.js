document.querySelector("section").addEventListener("click", function(event){
    let clicked = event.target;
    if (clicked.tagName === "BUTTON") {
        clicked.nextElementSibling.classList.toggle("hide");
    }
})