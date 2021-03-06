import { Link } from "react-router-dom";

import Header from "./Header";

import styles from '../styles/list.module.css';

const List = (props) => {
    const { featuredRecipe, recipes, setUrlChanged } = props;


    return (
        <div>
            <div className={`background ${styles.background}`}>
                <Header featuredRecipe={featuredRecipe} />
                <div className={`container ${styles.container}`}>
                    <h1>List of our Recipes</h1>
                    <ul className={styles.listings}>
                        {recipes ? recipes.map((recipe, index) => {
                            console.log(recipe.name, recipe.featured);
                            return (
                                <li key={index}>
                                    <Link to={`/recipes/details/${recipe._id}`}>{recipe.name}</Link>
                                    {recipe.featured ? <span>Featured</span> : null}
                                    <button onClick={() => setUrlChanged(prev => !prev)} className='btn-primary'><Link to={`/recipes/edit/${recipe._id}`}>Edit</Link></button>
                                </li>
                            )
                        }) : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List;