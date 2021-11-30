window.onload = function () {
    // Variables
    let buttPrincipal = document.querySelector('#mainButt');
    let usersArray = [];
    //var nom = window.alert("Escriu el teu nom: ")
    //...
    
    // Funciones
    function addusers(){
        usersArray.push("xevi");
    }

    // Events
    buttPrincipal.addEventListener(onclick,addusers());
    var nom = window.prompt("Introdueix el teu nom: ");
    var edat = window.prompt("Introdueix la teva edat: ");

    var user = new Object();
    


    console.log(usersArray.length)
} 
