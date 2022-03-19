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

    let nom = document.getElementById("nom");
    let user = document.getElementById("user");
    let Matricule = document.getElementById("Matricule");
    let prenom = document.getElementById("prenom");
    let status = document.getElementById("status");
    let date = document.getElementById("date");

    let row = document.createElement('tr');

    let id = new Date().getUTCMilliseconds();

    row.innerHTML = "<td>" + id + "</td>" +
                    "<td class='time'>" + date.value.split('-').reverse().join('/') + "</td>" +
                    "<td>" +  "<p class='etat'>" + status.value + "</p>" + "</td>" +
                    "<td>" + prenom.value + "</td>" +
                    "<td>" + nom.value + "</td>" +
                    "<td>" + user.value + "</td>" +
                    "<td>" + Matricule.value + "</td>" +
                    "<td class='delete'>" + '<i class="fas fa-trash-alt">' + '</i>' + "</td>";

    table.appendChild(row);   

    let etat = document.querySelectorAll('.etat');
  
        etat.forEach(element => {

        if(element.textContent === "Validé"){

          element.style.backgroundColor = "#5BE881";
        }

        else if(element.textContent === "En validation"){

          element.style.backgroundColor = "#FDB64D";

        }

        else{
          element.style.backgroundColor = "#FF0000";
        }
        
});

modal.style.display = "none";


let trash = document.querySelectorAll('.delete');
  
    for(let d = 0; d < trash.length ; d++){
        
        trash[d].addEventListener("click", function() {
            this.parentNode.remove();
        });

    }

    nom.value = "";
    prenom.value = "";
    date.value = "";
    user.value = "";
    Matricule.value = "";
    status.value = "";

    


});