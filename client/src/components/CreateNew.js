import React, { useState } from "react";

import Header from "./Header";

import styles from '../styles/createNew.module.css';

const CreateNew = (props) => {
    const { featured } = props;

    const [ recipeName, setRecipeName ]  = useState('');
    const [ recipeIngredients, setRecipeIngredients ] = useState('');
    const [ recipeInstructions, setRecipeInstructions ] = useState('');
    const [ recipeImage, setRecipeImage ] = useState('');
    
    return (
        <div>
            <Header featured={featured} />
            <div className={`background ${styles.background}`}>
                <form className={`container ${styles.container} ${styles.form}`}>
                    <p>
                        <label htmlFor="recipeName">Recipe Name</label>
                        <input type="text" id="recipeName" value={recipeName} onChange={e => {setRecipeName(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeIngredients">Ingredients</label>
                        <input type="text" id="recipeIngredients" value={recipeIngredients} onChange={e => {setRecipeIngredients(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeInstructions">Instructions</label>
                        <input type="text" id="recipeInstructions" value={recipeInstructions} onChange={e => {setRecipeInstructions(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeImage">Image</label>
                        <input type="text" id="recipeImage" value={recipeImage} onChange={e => {setRecipeImage(e.target.value);}} />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CreateNew;