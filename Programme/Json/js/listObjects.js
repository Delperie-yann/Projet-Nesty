/*Les objets Reccette et ingredient*/
class Recipe {
    constructor(recette) {
        this.nom = recette.nom;
        this.nombre = recette.nombre;
        this.temps = recette.temps;
        this.image = recette.image;
        this.ingredients = recette.ingredients;
        this.listes = recette.listes;
        this.preparations = recette.preparations;
        this.valide = false;
    }
    validRecipe(ingredients) {
        let tabCommun = ingredients.filter((e) => this.ingredients.includes(e));
        if (tabCommun.length == ingredients.length) {
            this.valide = true;
        }
    }
}

class Ingredient {
    constructor(ingredient) {
        this.nom = ingredient;
        this.image = this.checkWriting(ingredient);
        this.valide = false;
    }
    changeValid(value) {
        this.valide = value;
    }
    checkWriting(text) {
        var text = text.toLowerCase().replace(/ /g, "");
        var accents = "àáâäôöèéêëçîïûü";
        var accentsOut = "aaaaooeeeeciiuu";
        var textArray = text.split("");
        var out = "";
        var x;
        for (let i = 0; i < textArray.length; i++) {
            if ((x = accents.indexOf(textArray[i])) != -1) {
                textArray[i] = accentsOut[x];
            }
            out += textArray[i];
        }
        return out;
    }
}
