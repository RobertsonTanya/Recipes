import { useParams } from "react-router-dom";

import Header from "./Header";

import styles from '../styles/details.module.css';
import { useEffect } from "react";

const Details = (props) => {
    const { featuredRecipe, recipes } = props;

    const { id } = useParams();


    return (
        <div>
            <Header featuredRecipe={featuredRecipe} />
            <div className={`background ${styles.background}`}>
                <div className={`container ${styles.container}`}>
                    {recipes ? recipes.map((recipe, index) => {
                        if(recipe._id === id){
                            return(
                                <div>
                                    <h1>{recipe.name}</h1>
                                    <div className={styles.details}>
                                        <div className={styles.detailsLeft}>
                                            <h3>Ingredients:</h3>
                                            <p>{recipe.ingredients}</p>
                                            <img className={styles.detailsImage} src={recipe.image} alt={featuredRecipe.name} />
                                        </div>
                                        <div className={styles.detailsRight}>
                                            <h3>Instructions:</h3>
                                            <p>{recipe.instructions}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }) : null }
                </div>
            </div>
        </div>
    )
}

export default Details;