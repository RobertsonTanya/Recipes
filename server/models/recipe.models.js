const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Recipes must have a name.'],
        unique: [true, 'Recipes must have a unique name.']
    },
    image: {
        type: String,
        required: [true, 'Recipes must have an image.']
    },
    ingredients: {
        type: String,
        required: [true, 'Recipes must have ingredients.']
    },
    instructions: {
        type: String,
        required: [true, 'Recipes must have instructions.']
    },
    featured: {
        type: Boolean
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);