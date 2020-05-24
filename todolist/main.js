let caselladitesto = document.querySelector("#todolist");
caselladitesto.addEventListener("keyup", function(){
    let testo = document.querySelector("#todolist").value;
    if (testo.trim()===""){
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
  let label = document.createElement("label");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.innerText = testo;
  li.appendChild(checkbox);
  li.appendChild(label);
  lista.appendChild(li);
  let casella = document.querySelector("#todolist");
  casella.value = "";
});
