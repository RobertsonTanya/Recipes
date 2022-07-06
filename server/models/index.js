// Exporting one object containing all models
module.exports.routes = {
    Recipe: require("./recipe.models"),
    Ingredient: require("./ingredients.models")
  };