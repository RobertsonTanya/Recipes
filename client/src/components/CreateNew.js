import React, { useState } from "react";
import axios from 'axios';

import Header from "./Header";

import styles from '../styles/createNew.module.css';

const CreateNew = (props) => {
    const { featured, recipes, setRecipes } = props;

    const [ recipeName, setRecipeName ]  = useState('');
    const [ recipeIngredients, setRecipeIngredients ] = useState([{}]);
    const [ recipeInstructions, setRecipeInstructions ] = useState('');
    const [ recipeImage, setRecipeImage ] = useState('');
    const [ recipeFeatured, setRecipeFeatured ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const recipeParams = { recipeName, recipeImage, recipeIngredients, recipeInstructions, recipeFeatured };
    
    
    const createNewRecipe = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/recipes', recipeParams)
            .then(res => {
                console.log(res);
                setRecipes([...recipes, res.data]);
            })
            .catch(err => { 
                console.log('error log', err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <Header featured={featured} />
            <div className={`background ${styles.background}`}>
                <form className={`container ${styles.container} ${styles.form}`} onSubmit={createNewRecipe}>
                    <p>
                        <label htmlFor="recipeName">Recipe Name</label>
                        <input type="text" id="recipeName" value={recipeName} onChange={e => {setRecipeName(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeIngredients">Ingredients</label>
                        <textarea id="recipeIngredients" value={recipeIngredients} onChange={e => {setRecipeIngredients(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeInstructions">Instructions</label>
                        <textarea id="recipeInstructions" value={recipeInstructions} onChange={e => {setRecipeInstructions(e.target.value);}} />
                    </p>
                    <p>
                        <label htmlFor="recipeImage">Image</label>
                        <input type="text" id="recipeImage" value={recipeImage} onChange={e => {setRecipeImage(e.target.value);}} />
                    </p>
                    <div className={styles.lastRow}>
                        <button className="btn-delete">Delete</button>
                        <p className={styles.featured}>
                            <input className={styles.featuredInput} type="checkbox" id="recipeFeatured" defaultChecked={false} value={recipeFeatured} onChange={e => {setRecipeFeatured(e.target.checked);}} />
                            <label className={styles.featuredLabel} htmlFor="recipeFeatured">Featured</label>
                        </p>
                        <button type="submit" className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNew;