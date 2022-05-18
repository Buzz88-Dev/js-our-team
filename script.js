let myDiv = document.querySelector(".team-container");
console.log(myDiv);

// oggetto--> chiave : valore,
let myArrayObject = [
    {
        "immagine" : "img/wayne-barnett-founder-ceo.jpg",
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder e CEO"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Angela Caroll",
        "ruolo" : "Chef Editor"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Scott Estrada",
        "ruolo" : "Developer"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer"
    }
]


console.log(myArrayObject);

for(let i = 0; i < myArrayObject.length; i++){

    let itemsObject = myArrayObject[i];

    for (let chiave in itemsObject){
        console.log(chiave + ":" + itemsObject[chiave]);
        
    }
}