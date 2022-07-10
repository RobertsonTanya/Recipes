import { Link } from "react-router-dom";

import Header from "./Header";

import styles from '../styles/list.module.css';
import { useEffect } from "react";

const List = (props) => {
    const { featured, recipes } = props;

    return (
        <div>
            <div className={styles.background}>
                <Header featured={featured} />
                <div className={`container`}>
                    <h1>List of our Recipes</h1>
                    <ul className={styles.listings}>
                        {recipes ? recipes.map((recipe, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                                    <button className='btn-primary'><Link to={`/recipes/edit/${recipe._id}`}>Edit</Link></button>
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