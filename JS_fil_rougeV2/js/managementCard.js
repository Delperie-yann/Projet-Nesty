var posRotate = [
    "md:rotate-6",
    "md:rotate-12",
    "md:-rotate-6",
    "md:-rotate-12",
];
var posRotateCard = [
    "md:rotate-1",
    "md:rotate-2",
    "md:-rotate-1",
    "md:-rotate-2",
];
var posCard = 0;

var cards = document.querySelectorAll(".cards");
var cardsI = document.querySelector(".cardsI");
var keep = document.querySelector(".keep");
keep.style.cursor = "pointer";
var sweep = document.querySelector(".sweep");
sweep.style.cursor = "pointer";

var textBelow = document.querySelector(".textBelow");
var imgBelow = document.querySelector(".imgBelow");
var textUp = document.querySelector(".textUp");
var imgUp = document.querySelector(".imgUp");

//positionnement des cartes superposées
for (let i = 0; i < cards.length; i++) {
    cards[i].style.zIndex = i + 1;
}
cardsI.style.zIndex = 10;

arrayCards = randomize(arrayCards);
possitionCard(posCard);

keep.addEventListener("click", function () {
    arrayCards[posCard].changeValid(true);
    posCard++;
    if (posCard == arrayCards.length) {
        posCard = 0;
    }
    moveCard("+");
    recipeDisplay();
});

sweep.addEventListener("click", function () {
    arrayCards[posCard].changeValid(false);
    posCard++;
    if (posCard == arrayCards.length) {
        posCard = 0;
    }
    moveCard("-");
    recipeDisplay();
});
