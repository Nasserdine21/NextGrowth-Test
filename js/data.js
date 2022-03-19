let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]

let table = document.getElementById('users');
  
  for(let key in users) {

    let row = document.createElement('tr');

    row.innerHTML = "<td>" + users[key].id + "</td>" +
                    "<td class='time'>" + users[key].createdDate + "</td>" +
                    "<td>" +  "<p class='etat'>" + users[key].status + "</p>" + "</td>" +
                    "<td>" + users[key].firstName + "</td>" +
                    "<td>" + users[key].lastName + "</td>" +
                    "<td>" + users[key].userName + "</td>" +
                    "<td>" + users[key].registrationNumber + "</td>" +
                    "<td class='delete'>" + '<i class="fas fa-trash-alt">' + '</i>' + "</td>";

    table.appendChild(row);

    
  }


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



function DateFormater(date) {

  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return day + '/' + month + '/' + year;
  
}


let time = document.querySelectorAll('.time');
  
time.forEach(element => {

  let temp = new Date(element.textContent);
        
  element.innerHTML = DateFormater(temp)
});

let trash = document.querySelectorAll('.delete');
  
    for(let d = 0; d < trash.length ; d++){
        
        trash[d].addEventListener("click", function() {
            this.parentNode.remove();
        });

    }



  

  

