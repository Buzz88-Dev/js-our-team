
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

myButton.addEventListener("click",
    function(){
        let nome = document.getElementById("name").value;
        let ruolo = document.getElementById("role").value;
        let scriptImmagine = document.getElementById("image").value;
        let immagine = "img/"+scriptImmagine+".jpg";
        myArrayObject.push({immagine, nome, ruolo});
        console.log(myArrayObject);
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
        //console.log(chiave + ":" + itemsObject[chiave]);
        //console.log(itemsObject["nome"]);
        myImage.src = itemsObject["immagine"];
        myh3.innerHTML = itemsObject["nome"];
        myp.innerHTML = itemsObject["ruolo"];
        
        cardImage.append(myImage);
        cardText.append(myh3, myp);

        divTeamCard.append(cardImage, cardText);

        teamContainer.append(divTeamCard);
    }
}


