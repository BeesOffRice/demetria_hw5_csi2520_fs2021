 if(typeof exports == "undefined"){
     exports = this;
 }  

Trivia = function(){
    this.init;
}

Trivia.prototype = {
    init: function(){     
        var form = document.querySelector("form");
        var test = document.querySelector("#test");

        form.addEventListener("submit",function(ev){
            console.log("bruhhHH");
            var data = new FormData(form);
            var output = "";
            for(const entry of data){
                output= output+entry[0]+"="+entry[1]+"\r";
            };
            test.innerText=output;
            event.preventDefault;
        }, false);
    }
}

exports.Trivia = new Trivia();
   
