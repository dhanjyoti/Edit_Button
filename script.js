const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const done_button = document.getElementById("done-button");

edit_button.addEventListener("click", function(){
    paragraph.contentEditable = true;
    paragraph.style.backgroundColor = "#dddbdb";
    paragraph.style.marginBottom = "10px";
});

done_button.addEventListener("click", function(){
    paragraph.contentEditable = false;
    paragraph.style.backgroundColor = "#ffe44d";
    paragraph.style.marginBottom = "10px";
});