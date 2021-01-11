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

//positionnement des 2 cartes visibles
function possitionCard(pos) {
    var pos2;
    if (pos == arrayCards.length - 1) {
        pos2 = 0;
    } else {
        pos2 = pos + 1;
    }

    textBelow.textContent = arrayCards[pos2].name;
    imgBelow.setAttribute("alt", arrayCards[pos2].name);
    imgBelow.setAttribute(
        "src",
        "./images/ingredients/" + arrayCards[pos2].picture + ".jpg"
    );

    textUp.textContent = arrayCards[pos].name;
    imgUp.setAttribute("alt", arrayCards[pos].name);
    imgUp.setAttribute(
        "src",
        "./images/ingredients/" + arrayCards[pos].picture + ".jpg"
    );
}

//mouvement des cartes
function moveCard(way) {
    posRotate = randomize(posRotate);
    posRotateCard = randomize(posRotateCard);
    cardsI.classList.add("horizTranslate");
    const transition = document.querySelector(".horizTranslate");
    cardsI.style.transform = "translateX(" + way + 650 + "px)";

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
            "'><img class='" +
            imgClass +
            "' alt='" +
            arrayRepices[repice].name +
            "' width=200px height='200px' src ='./images/recettes/" +
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
    var repiceModal;
    for (var repice in arrayRepices) {
        if (arrayRepices[repice].number == id) {
            repiceModal = arrayRepices[repice];
            break;
        }
    }
    console.log(repiceModal);
}
