const accordionElement = document.getElementsByClassName("card__question");

for (let i=0;i<accordionElement.length;i++) {
    accordionElement[i].addEventListener('click', function(){
        this.classList.toggle('card__question--active');



        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
    
}


console.log(accordionElement);