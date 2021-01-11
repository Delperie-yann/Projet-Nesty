/*Création des objets reccettes à partir du JSON*/
var arrayRepices = [];
repices.forEach((repice) => {
    arrayRepices.push(new Recipe(repice));
});

/*Création des cartes ingredients*/
var listIngredients = [
    "Noix de coco",
    "Kiwis",
    "Oranges",
    "Citrons",
    "Framboises",
    "Fraises",
    "Amandes",
    "Miel",
    "Pêches",
    "Beurre",
    "Lait",
    "Oeufs",
    "Farine",
    "Chocolat blanc",
    "Chocolat",
    "Cerises",
    "Sucre",
    "Pommes",
];
var arrayCards = [];
listIngredients.forEach((ingredient) => {
    arrayCards.push(new Card(ingredient));
});
