import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";

import styles from '../styles/createNew.module.css';

const Edit = (props) => {
    const { featuredRecipe } = props;
    const { id } = useParams();
    const navigate = useNavigate();

    const [ recipe, setRecipe ] = useState({});
    const [ name, setName ]  = useState(recipe.name);
    const [ ingredients, setIngredients ] = useState(recipe.ingredients);
    const [ instructions, setInstructions ] = useState(recipe.instructions);
    const [ image, setImage ] = useState(recipe.image);
    const [ featured, setFeatured ] = useState(recipe.featured);
    const [ errors, setErrors ] = useState({});
    const recipeParams = { name, image, ingredients, instructions, featured };
    

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then(res => {
                console.log(res.data);
                setRecipe(res.data);
                setName(res.data.name);
                setImage(res.data.image);
                setIngredients(res.data.ingredients);
                setInstructions(res.data.instructions);
                setFeatured(res.data.featured);
            })
            .catch(err => { console.log(err)})
    }, [])
    
    const updateRecipe = (e) => {
        e.preventDefault();

        setErrors({});
        axios.put('http://localhost:8000/api/recipes', recipeParams)
            .then(res => {
                console.log(res.data);
                navigate(`/recipes/details/${id}`);
            })
            .catch(err => {
                console.log('error log', err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <Header featuredRecipe={featuredRecipe} />
            <div className={`background ${styles.background}`}>
                <form className={`container ${styles.container} ${styles.form}`} onSubmit={updateRecipe}>
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
                            <input className={styles.featuredInput} type="checkbox" id="featured"  checked={featured} onChange={e => {setFeatured(e.target.checked);}} />
                            <label className={styles.featuredLabel} htmlFor="featured">Featured</label>
                            {errors && errors.featured && errors.featured.message ?
                                <p className="error">{errors.featured.message}</p>
                            : null}
                        </p>
                        <button type="submit" className="btn-primary">Submit</button>
                    </div>
                    {image ?
                        <img className={styles.image} src={image} alt={name} />
                    : null }
                </form>
            </div>
        </div>
    )
}

export default Edit;