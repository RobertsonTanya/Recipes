const mongoose = require('mongoose');


const IngredientsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
    },
    measurement: {
        type: String,
    },
    name: {
        type: String,
    },
    recipes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Recipe'
        }
    ]
})

module.exports = mongoose.model('Ingredient', IngredientsSchema);