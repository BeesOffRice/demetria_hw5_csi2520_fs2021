const commentHolder = document.querySelector("#commentSection");
const submitButton = document.createElement("button");

document.querySelector("#insertComment").addEventListener("click",createTextarea);

const commentBox = document.createElement("textarea");

function createTextarea(){
    if(this.clicked){
        console.log("submit button already clicked");
    } else {

        let linebreak = document.createElement("br");

        commentBox.innerHTML="write your comment here";
        commentHolder.appendChild(commentBox);

        submitButton.setAttribute("id","submit");
        submitButton.innerHTML="Submit Comment";

        commentHolder.appendChild(linebreak);
        commentHolder.appendChild(submitButton);

        this.clicked = true;
    }  
}

submitButton.addEventListener("click",(ev) => {
    addComment(ev);
});

function addComment(ev){
    let comDiv = document.createElement("div");
    comDiv.className="comDiv";
    const textbox = document.createElement("div");
    textbox.setAttribute("class","commText")
    const replyButton = document.createElement("button");
    replyButton.className="reply";
    replyButton.innerHTML="Write a Reply";
    let commentText;

    if(ev.target==submitButton){
        commentText = commentBox.value;
        textbox.innerHTML=commentText;
        commentBox.value =" ";

        comDiv.append(textbox,replyButton);
        commentHolder.appendChild(comDiv);
    } else {
        comDiv=ev.target.parentElement;
        commentText=ev.target.parentElement.firstElementChild.value;
        textbox.innerHTML=commentText;
        comDiv.innerHTML="";
        comDiv.append(textbox,replyButton);

    }
    

    

}

commentHolder.addEventListener("click",(e) => {
        replyfunc(e);   
    });

function replyfunc(e){
    if(e.target.className=="reply"){
        const parent = e.target.parentElement;
        const divcont = document.createElement("div");
        const textArea = document.createElement("textarea");
        const subReply = document.createElement("button");
        subReply.className="subReply";
        subReply.innerHTML="submit reply";

        divcont.append(textArea,subReply);
        parent.appendChild(divcont);
    } else if (e.target.className=="subReply"){
        addComment(e);
    }
}


