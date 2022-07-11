const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Recipes must have a name.']
    },
    image: {
        type: String,
    },
    ingredients: {
        type: String,
        required: [true, 'Recipes must have ingredients.']
    },
    // ingredients: [
    //     { 
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'Ingredient' 
    //     }
    // ],
    instructions: {
        type: String,
        required: [true, 'Recipes must have instructions.']
    },
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);