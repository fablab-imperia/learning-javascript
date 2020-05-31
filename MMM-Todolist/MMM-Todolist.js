Module.register("MMM-Todolist",{
    defaults: {
		text: "todolist"
    },
    getScripts: function() {
        return [
           // this.file('main.js') // this file will be loaded straight from the module folder.
        ]
    },
    getStyles: function() {
        return [
            this.file('style.css') // this file will be loaded straight from the module folder.
        ]
    }, 
    getDom: function() {
        var wrapper = document.createElement("div");
        // <h1 class="colorerosso">La mia todolist preferita</h1>
        let h1 = document.createElement("h1");
        h1.innerText = "La mia todolist preferita";
        h1.className = "colorerosso";
        wrapper.appendChild(h1);
        /*  <form>
        <label class="colorerosso"  for="todolist">Cose da fare:</label>
        <input type="text" id="todolist" ><br><br>
        <input disabled type="button" value="Inserisci" id="inserisci">
        </form> */
        let form = document.createElement("form");
        let label = document.createElement("label");
        label.className = "colorerosso";
        label.innerText = "Cose da fare";
        form.appendChild(label);
        let input = document.createElement("input");
        input.type = "text";
        input.id = "todolist";
        form.appendChild(input);
        let br = document.createElement("br");
        form.appendChild(br);
        let button = document.createElement("input");
        button.type = "button";
        button.id = "inserisci";
        button.value = "Inserisci";
        form.appendChild(button);
        wrapper.appendChild(form);
        /* <ul id="lista">
    </ul> */
        let ul = document.createElement("ul");
        ul.id = "lista";
        wrapper.appendChild(ul);
        return wrapper;
    }

});