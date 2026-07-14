// Dark / Light Mode Toggle

const button = document.getElementById("theme-btn");


button.onclick = function(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        button.innerHTML = "☀️";

    }

    else{

        button.innerHTML = "🌙";

    }

};



// Smooth Scrolling

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });

});