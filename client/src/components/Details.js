import { useParams } from "react-router-dom";

import Header from "./Header";

import styles from '../styles/details.module.css';

const Details = (props) => {
    const { featured, recipes } = props;

    const { id } = useParams();

    return (
        <div>
            <Header featured={featured} />
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
                                            <ul>
                                            {featured.ingredients ? featured.ingredients.map((ingredient, index) => {
                                                return (
                                                    <li key={index}>{ingredient.quantity} {ingredient.measurement} {ingredient.name}</li>
                                                )
                                            }) : null}
                                            </ul>
                                            <img className={styles.detailsImage} src={featured.image} alt={featured.name} />
                                        </div>
                                        <div className={styles.detailsRight}>
                                            <h3>Instructions:</h3>
                                            <p>{featured.instructions}</p>
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