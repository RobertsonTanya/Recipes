const IngredientController = require('../controllers/ingredient.controllers');

module.exports = (app) => {
    app.get('/api/ingredients', IngredientController.getAllIngredients);
    app.get('/api/ingredients/:id', IngredientController.findOneIngredient);
    app.put('/api/ingredients/:id', IngredientController.updateIngredient);
    app.post('/api/ingredients', IngredientController.createNewIngredient);
    app.delete('/api/ingredients/:id', IngredientController.deleteIngredient);
}