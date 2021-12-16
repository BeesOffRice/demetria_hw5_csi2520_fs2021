const form = document.querySelector("form");

const button = document.querySelector("#test");

let newForm = new FormData(form);
let points = newForm.points;

console.log(points);

button.addEventListener("click",(ev) => {
        button.innerHTML = "aaaaa";
    });



    

    
