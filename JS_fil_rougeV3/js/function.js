//Créer un tableau des ingrédients validés par l'user
function countCard() {
    let arrayCardValid = [];
    arrayCards.forEach((ingredient) => {
        if (ingredient.valid) {
            arrayCardValid.push(ingredient.name.toLowerCase());
        }
    });
    return arrayCardValid;
}

//valide les recettes par rapport aux choix des ingrédients de l'utilisateur
function searchRecipe() {
    var cards = countCard();
    for (var repice in arrayRepices) {
        arrayRepices[repice].validRecipe(cards);
    }
}

//mélanger un tableau
function randomize(array) {
    var i, j, tmp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

// détection taille écran utilisateur
function viewportSize() {
    var d = document.documentElement;
    return {
        height: d.clientHeight,
        width: d.clientWidth,
    };
}

//positionnement des 2 cartes visibles
function possitionCard(pos) {
    let heightWindow = viewportSize().height;
    let widthtWindow = viewportSize().width;

    var pos2;
    if (pos == arrayCards.length - 1) {
        pos2 = 0;
    } else {
        pos2 = pos + 1;
    }
    if ((arrayCards[pos2].name.length > 10) & (widthtWindow < 550)) {
        textBelow.style.fontSize = "2.4rem";
    } else {
        textBelow.removeAttribute("style");
    }
    textBelow.textContent = arrayCards[pos2].name;
    imgBelow.setAttribute("alt", arrayCards[pos2].name);
    imgBelow.setAttribute(
        "src",
        "./images/ingredients/" + arrayCards[pos2].picture + ".jpg"
    );

    if ((arrayCards[pos].name.length > 10) & (widthtWindow < 550)) {
        textUp.style.fontSize = "2.4rem";
    } else {
        textUp.removeAttribute("style");
    }
    textUp.textContent = arrayCards[pos].name;
    imgUp.setAttribute("alt", arrayCards[pos].name);
    imgUp.setAttribute(
        "src",
        "./images/ingredients/" + arrayCards[pos].picture + ".jpg"
    );

    // diminuer la taille des images sur les écrans moins long pour éviter trop de scrolling

    if ((heightWindow < 900) & (widthtWindow > 550)) {
        imgBelow.setAttribute("height", "300px");
        imgBelow.setAttribute("width", "300px");
        imgUp.setAttribute("height", "300px");
        imgUp.setAttribute("width", "300px");
    } else {
        imgBelow.removeAttribute("height");
        imgBelow.removeAttribute("width");
        imgUp.removeAttribute("height");
        imgUp.removeAttribute("width");
    }
}

//mouvement des cartes
function moveCard(way, move) {
    posRotate = randomize(posRotate);
    posRotateCard = randomize(posRotateCard);
    cardsI.classList.add("horizTranslate");
    const transition = document.querySelector(".horizTranslate");
    cardsI.style.transform = "translateX(" + way + move + "px)";

    transition.ontransitionend = () => {
        cardsI.style.zIndex = 1;
        for (let i = 0; i < cards.length - 1; i++) {
            cards[i].classList.replace(
                cards[i].classList.item(0),
                posRotate[i]
            );
            cards[i + 1].classList.replace(
                cards[i + 1].classList.item(0),
                posRotateCard[i]
            );
        }
        cardsI.style.transform = "translateX(" + 0 + "px)";
        transition.ontransitionend = () => {
            possitionCard(posCard);
            cardsI.classList.replace(
                cardsI.classList.item(0),
                posRotateCard[3]
            );
            cardsI.style.zIndex = 10;
        };
    };
}

function recipeDisplay() {
    let repiceDiv = document.querySelector(".repice");
    let html = "";
    let imgClass;
    let divClass;
    searchRecipe();
    repiceDiv.style.zIndex = 0;
    for (var repice in arrayRepices) {
        if (arrayRepices[repice].valid) {
            imgClass = "validImg";
            divClass = "validDiv";
        } else {
            imgClass = "grayImg";
            divClass = "grayDiv";
        }
        html +=
            "<div class='tooltip " +
            divClass +
            " divsRepice' id='" +
            arrayRepices[repice].number +
            "'><img class='rounded " +
            imgClass +
            "' alt='" +
            arrayRepices[repice].name +
            "' width='200px' height='200px' src ='./images/recettes/" +
            arrayRepices[repice].picture +
            ".jpg'/><span class='tooltiptext'>" +
            arrayRepices[repice].name +
            "</span></div>";
    }
    repiceDiv.innerHTML = html;

    var divsRepice = document.querySelectorAll(".divsRepice");
    for (var i = 0; i < divsRepice.length; i++) {
        divsRepice[i].addEventListener("click", function () {
            openModal(this.getAttribute("id"));
        });
    }
}

function openModal(id) {
    var repiceModal = document.querySelector(".modal");
    let div = "";
    for (var repice in arrayRepices) {
        if (arrayRepices[repice].number == id) {
            repiceModal = arrayRepices[repice];
            div1 = '<div class="modal-content">'
            div2 = '<span class="close" >x</span>'
            div3 = '<p class= "modal-name">Nom de la recette : ' + repiceModal.name + '</p>'
            div4 = '<p class= "modal-number">Pour ' + repiceModal.number + " personnes" + '</p>'
            div5 = '<p class= "modal-time">Durée : "' + repiceModal.time + '</p>'
            div6 = '<p class= "modal-picture"><img class="center"+ ' + repiceModal.name + " src ='./images/recettes/" + repiceModal.picture +".jpg'/></p>"
           
            var s = repiceModal.lists;

            for (var j = 0; j < s.length; j++) {  
                for (var i = 0; i < s.length; j++) { 
             var prep = repiceModal.lists[j];
                }
            }
            var prep2 =repiceModal.preparations[j];
            div7 = '<p class= "modal-lists">' + prep+ '</p>'
            div8 = '<p class= "modal-preparations">' + prep2 + '</p>'
            div9 = '<p class= "modal-Conseil"> Conseil pour un petit plus : ' + repiceModal.preparations.Conseil + '</p>' + '</div>';
        
            modal.style.display = "block";
            modal.innerHTML = div1 + div2 + div3 + div4 + div5 + div6 + div7 + div8 + div9;
        }
    }

    console.log(repiceModal);
    
    console.log(div);
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

}
