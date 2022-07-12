import React, { useState } from "react";
import axios from 'axios';

import Header from "./Header";

import styles from '../styles/createNew.module.css';

const CreateNew = (props) => {
    const { featuredRecipe, recipes, setRecipes } = props;

    const [ name, setName ]  = useState('');
    const [ ingredients, setIngredients ] = useState('');
    const [ instructions, setInstructions ] = useState('');
    const [ image, setImage ] = useState('');
    const [ featured, setFeatured ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const recipeParams = { name, image, ingredients, instructions, featured };
    
    
    const createNewRecipe = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/recipes', recipeParams)
            .then(res => {
                console.log(res.data);
                setRecipes([...recipes, res.data]);
            })
            .catch(err => { 
                console.log('error log', err.response);
                console.log('error log', err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <Header featuredRecipe={featuredRecipe} />
            <div className={`background ${styles.background}`}>
                <form className={`container ${styles.container} ${styles.form}`} onSubmit={createNewRecipe}>
                    <p>
                        <label htmlFor="name">Recipe Name</label>
                        <input type="text" id="name" value={name} onChange={e => {setName(e.target.value);}} />
                    </p>
                    {errors && errors.name && errors.name.message ?
                        <p className="error">{errors.name.message}</p>
                    : null}
                    <p>
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea id="ingredients" value={ingredients} onChange={e => {setIngredients(e.target.value);}} />
                    </p>
                    {errors && errors.ingredients && errors.ingredients.message ?
                        <p className="error">{errors.ingredients.message}</p>
                    : null}
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" value={instructions} onChange={e => {setInstructions(e.target.value);}} />
                    </p>
                    {errors && errors.instructions && errors.instructions.message ?
                        <p className="error">{errors.instructions.message}</p>
                    : null}
                    <p>
                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" value={image} onChange={e => {setImage(e.target.value);}} />
                    </p>
                    {errors && errors.image && errors.image.message ?
                        <p className="error">{errors.image.message}</p>
                    : null}
                    <div className={styles.lastRow}>
                        <button className="btn-delete">Delete</button>
                        <p className={styles.featured}>
                            <input className={styles.featuredInput} type="checkbox" id="featured" defaultChecked={false} value={featured} onChange={e => {setFeatured(e.target.checked);}} />
                            <label className={styles.featuredLabel} htmlFor="featured">Featured</label>
                            {errors && errors.featured && errors.featured.message ?
                                <p className="error">{errors.featured.message}</p>
                            : null}
                        </p>
                        <button type="submit" className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNew;