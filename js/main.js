const accordionElement = document.getElementsByClassName("card__question");

for (let i=0;i<accordionElement.length;i++) {
    accordionElement[i].addEventListener('click', function(){
        this.classList.toggle('card__question--active');


        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginBottom = 0 + "px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.marginBottom = 20 + "px";
        }
    })
    
}


