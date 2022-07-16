import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";

import styles from '../styles/createNew.module.css';

const Edit = (props) => {
    const { featuredRecipe, setFeaturedRecipe, count, recipes, setRecipes } = props;
    const { id } = useParams();
    const navigate = useNavigate();

    const [ recipe, setRecipe ] = useState({});
    const [ name, setName ]  = useState('');
    const [ ingredients, setIngredients ] = useState('');
    const [ instructions, setInstructions ] = useState('');
    const [ image, setImage ] = useState('');
    const [ featured, setFeatured ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const recipeParams = { name, image, ingredients, instructions, featured };
    

    useEffect(()=> {
        console.log('use effect is running')
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then(res => {
                setRecipe(res.data);
                setName(res.data.name);
                setImage(res.data.image);
                setIngredients(res.data.ingredients);
                setInstructions(res.data.instructions);
                setFeatured(res.data.featured);
            })
            .catch(err => { console.log(err)})
    }, [])
    
    const updateRecipes = (id) => {
        const updatedRecipes = recipes.map(recipe => {
            if (recipe._id === id) {
                return {...recipe, featured}
            }
            return recipe
        })
        setRecipes(updatedRecipes)
    }


    const updateRecipe = (e) => {
        e.preventDefault();
        setErrors({});
        axios.put(`http://localhost:8000/api/recipes/${id}`, recipeParams)
            .then(res => {
                console.log(res.data);
                updateRecipes(res.data._id)
                if (!count && res.data.featured) {
                    setFeaturedRecipe(res.data)
                } else if (!count && !res.data.featured) {
                    setFeaturedRecipe({})
                }
                navigate(`/recipes`);
            })
            .catch(err => {
                console.log('error log', err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    const deleteRecipe = (recipeId) => {
        axios.delete(`http://localhost:8000/api/recipes/${recipeId}`)
            .then(res => {
                console.log(res);
                setRecipes(recipes.filter(recipe => recipe._id != recipeId));
            })
            .catch(err => {
                console.log(err)
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
                        <button className="btn-delete" onClick={()=>deleteRecipe(recipe._id)}>Delete</button>
                        <p className={styles.featured}>
                            <input className={styles.featuredInput} type="checkbox" id="featured" disabled={Object.keys(featuredRecipe).length ? recipe._id !== featuredRecipe._id : false} checked={featured} onChange={e=>setFeatured(e.target.checked)} />
                            <label className={styles.featuredLabel} htmlFor="featured">Featured</label>
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