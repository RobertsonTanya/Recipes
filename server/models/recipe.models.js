const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Recipes must have a name.'],
        minLength: [10, 'Recipes must have a 10 character name.'],
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
        required: [true, 'Recipes must have instructions.'],
        minLength: [40, 'Recipes must have a 40 character instructions.']
    },
    featured: {
        type: Boolean
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);