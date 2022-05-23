// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e 
// dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, 
// stampare dinamicamente una card per ogni membro del team.


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
        "immagine" : "img/walter-gordon-office-manager.jpg",
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager"
    },

    {
        "immagine" : "img/angela-lopez-social-media-manager.jpg",
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager"
    },

    {
        "immagine" : "img/scott-estrada-developer.jpg",
        "nome" : "Scott Estrada",
        "ruolo" : "Developer"
    },

    {
        "immagine" : "img/barbara-ramos-graphic-designer.jpg",
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer"
    }
]


let myButton = document.getElementById("addMemberButton");

// myButton.addEventListener("click",
//     function(){
//         let nome = document.getElementById("name").value;
//         let ruolo = document.getElementById("role").value;
//         let scriptImmagine = document.getElementById("image").value;
//         let immagine = "img/"+scriptImmagine+".jpg";
//         myArrayObject.push({immagine, nome, ruolo});
//         console.log(myArrayObject);
//     }
// )

myButton.addEventListener("click",
    function(){
        let teamContainer = document.querySelector(".team-container");

        let divTeamCard = document.createElement("div");
        divTeamCard.classList.add("team-card");

        let cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        let myImage = document.createElement("img");

        let cardText = document.createElement("div");
        cardText.classList.add("card-text");

        let myh3 = document.createElement("h3");

        let myp = document.createElement("p");

        let nome = document.getElementById("name").value;
        let ruolo = document.getElementById("role").value;
        let scriptImmagine = document.getElementById("image").value;
        let immagine = "img/"+scriptImmagine+".jpg";

        myImage.src = immagine;
        myh3.innerHTML = nome;
        myp.innerHTML = ruolo;
        
        cardImage.append(myImage);
        cardText.append(myh3, myp);

        divTeamCard.append(cardImage, cardText);

        teamContainer.append(divTeamCard);

        nome.innerHTML = " ";
        
    }
)


for(let i = 0; i < myArrayObject.length; i++){
    let teamContainer = document.querySelector(".team-container");

    let divTeamCard = document.createElement("div");
    divTeamCard.classList.add("team-card");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    let myImage = document.createElement("img");

    let cardText = document.createElement("div");
    cardText.classList.add("card-text");

    let myh3 = document.createElement("h3");

    let myp = document.createElement("p");

    let itemsObject = myArrayObject[i];

    for (let chiave in itemsObject){
        // console.log(chiave + ":" + itemsObject[chiave]); // mi stampa tutte le chiavi con il loro valore
        // console.log(itemsObject["nome"]); // mi stampa i valori delle chiavi nome (è un ciclo)
        myImage.src = itemsObject["immagine"];
        myh3.innerHTML = itemsObject["nome"];
        myp.innerHTML = itemsObject["ruolo"];
        
        cardImage.append(myImage);
        cardText.append(myh3, myp);

        divTeamCard.append(cardImage, cardText);

        teamContainer.append(divTeamCard);
    }
}



/*
    parte bonus del form
*/

// costanti del DOM
const nameMember = document.getElementById('name');
const roleMember = document.getElementById('role');
const imgMember = document.getElementById('image');
const addButton = document.getElementById('addMemberButton');
addButton.addEventListener('click',addTeamCardObject);

// funzioni del programma
function addTeamCardObject(){
    let cardObject = {
        'nome' : nameMember.value,
        'ruolo' : roleMember.value,
        'foto' : imgMember.value
    };
    nameMember.value = '';
    roleMember.value = '';
    imgMember.value = '';
    myArrayObject.push(cardObject);
    addTeamCardDom(cardObject);
}