//navbar section start he

function myFunction() {

    var x = document.getElementById("openh1");

    if (x.style.display == "block") {

        x.style.display = "none";

    } else {
        x.style.display = "block";
    }
}



//active link desing here

let ul = document.querySelector("ul");
let li = document.querySelectorAll('li');


li.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});
