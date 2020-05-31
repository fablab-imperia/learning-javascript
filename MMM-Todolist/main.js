document.querySelector("#inserisci").disabled = true;


let todoList = JSON.parse(localStorage.getItem('todoList'));

if (todoList === null){
  todoList = [];
}
for (let el of todoList){
  createListItem(el);
}


let caselladitesto = document.querySelector("#todolist");
caselladitesto.addEventListener("keyup", function() {
  let testo = document.querySelector("#todolist").value;
  if (testo.trim() === "") {
    const btn = document.getElementById("inserisci");
    btn.disabled = true;
  } else {
    const btn = document.getElementById("inserisci");
    btn.disabled = false;
  }
});

const bottone = document.querySelector("#inserisci");
bottone.addEventListener("click", function() {
  let testo = document.querySelector("#todolist").value;

  createListItem(testo);

  todoList.push(testo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  let casella = document.querySelector("#todolist");
  casella.value = "";
  document.querySelector("#inserisci").disabled = true;
});


function createListItem(testo) {
  let lista = document.querySelector("#lista");

  let li = document.createElement("li");
  let label = document.createElement("label");
  let checkbox = document.createElement("input");
  checkbox.addEventListener("click", function(e) {
    const parent = e.target.parentElement;
    const valoreDaCancellare = parent.querySelector('label').innerText;
    todoList = todoList.filter( el => el !== valoreDaCancellare);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    parent.remove();
  });

  checkbox.type = "checkbox";
  label.innerText = testo;
  li.appendChild(checkbox);
  li.appendChild(label);
  lista.appendChild(li);
}
