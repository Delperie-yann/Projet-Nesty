//Créer un tableau des ingrédients validés par l'user
function countCard() {
    tabCarte = [];
    tabIngredients.forEach((ingredient) => {
        if (ingredient.valide) {
            tabCarte.push(ingredient.nom.toLowerCase());
        }
    });
    return tabCarte;
}

//valide les recettes par rapport aux choix des ingrédients de l'utilisateur
function searchRecipe() {
    var cartes = countCard();
    for (var recette in tabRecettes) {
        tabRecettes[recette].validRecipe(cartes);
    }
}

//mélanger un tableau
function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

//positionnement des 2 cartes visible
function possitioncard(pos) {
    console.log(pos);
    var pos2;
    if (pos == tabIngredients.length - 1) {
        pos2 = 0;
    } else {
        pos2 = pos + 1;
    }
    console.log(pos2);

    textBelow.textContent = tabIngredients[pos2].nom;
    imgBelow.setAttribute("alt", tabIngredients[pos2].nom);
    imgBelow.setAttribute(
        "src",
        "./images/ingredients/" + tabIngredients[pos2].image + ".jpg"
    );

    textUp.textContent = tabIngredients[pos].nom;
    imgUp.setAttribute("alt", tabIngredients[pos].nom);
    imgUp.setAttribute(
        "src",
        "./images/ingredients/" + tabIngredients[pos].image + ".jpg"
    );
}

//mouvement des cartes
function moveCard() {
    posRotate = randomize(posRotate);
    posRotateCard = randomize(posRotateCard);
    cardsI.classList.add("horizTranslate");
    const transition = document.querySelector(".horizTranslate");
    cardsI.style.transform = "translateX(" + -650 + "px)";

    transition.ontransitionend = () => {
        cardsI.style.zIndex = 0;
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
            possitioncard(posCard);
            cardsI.classList.replace(
                cardsI.classList.item(0),
                posRotateCard[3]
            );
            cardsI.style.zIndex = 10;
        };
    };
}
