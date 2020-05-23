let caselladitesto = document.querySelector("#todolist");
caselladitesto.addEventListener("keydown", function(){
    let testo = document.querySelector("#todolist").value;
    if (testo===""){
        const btn = document.getElementById("inserisci");
        btn.disabled=true;
    }
    else {
        const btn = document.getElementById("inserisci");
        btn.disabled=false;
    }
});

const bottone = document.querySelector("#inserisci");
bottone.addEventListener("click", function() {
  let testo = document.querySelector("#todolist").value;
  
  let lista = document.querySelector("#lista");

  let li = document.createElement("li");
  li.innerText = testo;

  lista.appendChild(li);
});
