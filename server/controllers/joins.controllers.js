const Recipe = require('../models/recipe.models');
const Ingredient = require('../models/ingredients.models');


const updateSubDocById = async (model, doc, field, subDoc) => {
    let updated = await model.findOneAndUpdate({_id: doc._id},
        {$addToSet: {[field]: subDoc._id}},
        { new: true, useFindAndModify: true}
    )
    return updated;
}

module.exports.creation = async (req, res) => {

    if(req.params.create === "ingredients"){
        MainModel = Ingredient
        subField = 'recipes'
        mainField = 'ingredients'
        SubModel = Recipe
    } else {
        MainModel = Recipe
        subField = 'ingredients'
        mainField = 'recipes'
        SubModel = Ingredient
    }


    let newMainObj = await new MainModel({name: req.body.name, ingredients: []})//add later

    let subArray = req.body[subField];

    let updatedMain;

    newMainObj.save();

    if(subArray){
        const subFieldLoop = async () => {
            for(let sub of subArray){
                
                let subExists = await SubModel.findOne({name: sub.name});
                
                if(subExists){
                    updatedMain = await updateSubDocById(MainModel, newMainObj, [subField], subExists);

                    await updateSubDocById(SubModel, subExists, [mainField], updatedMain);

                } else {
                    let newSub = await SubModel.create(sub);

                    updatedMain = await updateSubDocById(MainModel, newMainObj, [subField], newSub);

                    await updateSubDocById(SubModel, newSub, [mainField], updatedMain);
                }
            }
        }
        await subFieldLoop();

        res.json(updatedMain);
    }
    
}





// Route for retrieving a Recipe by id and populating it's Ingredient.
module.exports.findOneRecipe = (req, res) => {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    Recipe.findOne({ _id: req.params.id })
        // ..and populate all of the notes associated with it
        .populate("ingredients")
        .then(function(dbRecipe) {
            // If we were able to successfully find an Recipe with the given id, send it back to the client
            res.json(dbRecipe);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};