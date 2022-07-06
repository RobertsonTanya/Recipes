const RecipeController = require('../controllers/recipe.controllers');
const JoinsController = require('../controllers/joins.controllers');

module.exports = (app) => {
    app.get('/api/recipes', RecipeController.getAllRecipes);
    app.get('/api/recipes/:id', JoinsController.findOneRecipe);
    app.put('/api/recipes/:id', RecipeController.updateRecipe);
    app.post('/api/creation', JoinsController.creation);
    app.delete('/api/recipes/:id', RecipeController.deleteRecipe);
}