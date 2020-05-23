const bottone = document.querySelector("#inserisci");
bottone.addEventListener("click", function() {
  let testo = document.querySelector("#todolist").value;
  
  let lista = document.querySelector("#lista");

  let li = document.createElement("li");
  li.innerText = testo;

  lista.appendChild(li);
});
