Module.register("MMM-Todolist",{
    defaults: {
		text: "todolist"
    },
    getScripts: function() {
        return [
            this.file('main.js') // this file will be loaded straight from the module folder.
        ]
    },
    getStyles: function() {
        return [
            this.file('style.css') // this file will be loaded straight from the module folder.
        ]
    }, 
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = 'Hello world!';
        return wrapper;
    }

});