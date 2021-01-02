/*Création des objets reccettes à partir du JSON*/
var tabRecettes = [];
recettes.forEach((recette) => {
    tabRecettes.push(new Recipe(recette));
});

/*Création des cartes ingredients*/
var listeIngredients = [
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
var tabIngredients = [];
listeIngredients.forEach((ingredient) => {
    tabIngredients.push(new Ingredient(ingredient));
});

/*console.log(array1.filter(e => array2.includes(e)));*/
