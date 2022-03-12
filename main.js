function store(){ //przechowuje elementy w localstorage
    var email = document.getElementById('email').value;
    var hasło = document.getElementById('hasło').value;
    var login = document.getElementById('login').value;

    const passy = {
        email: email,
        hasło: hasło,
    }

    window.localStorage.setItem(login,JSON.stringify(passy));  
    //konwertuje elementy na string
}

function retrieveRecords(){ //local storage otrzymuje objekt
    var login = document.getElementById('otrzymajdane').value; //otrzymuje login od użytkownika
    console.log("otrzymaj dane");
    var records = window.localStorage.getItem(login); //szuka loginu w local storage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("otrzymaj");
    element.appendChild(paragraph);
}

function removeItem(){ //usuwa objekt z local storage
    var login = document.getElementById('removeKey').value;
    localStorage.removeItem(login)
    console.log("remove items");
}

function clearStorage(){ //usuwa wszystkie obiekty z local storage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //zapewnia załadowanie strony przed wykonaniem funkcji

    document.getElementById("passmng").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}