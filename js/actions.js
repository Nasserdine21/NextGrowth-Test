let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];

 
btn.addEventListener("click", function() {
    modal.style.display = "block";
});

span.addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let save = document.getElementById("save");

save.addEventListener('click', function() {

    
});