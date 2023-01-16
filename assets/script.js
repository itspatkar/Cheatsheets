var button = document.querySelector(".button");

button.addEventListener("click", function(){
    if (document.body.getAttribute("data-theme") == "light"){
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
});
