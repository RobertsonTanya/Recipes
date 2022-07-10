import { Link } from "react-router-dom";

import Header from "./Header";

import styles from '../styles/list.module.css';

const List = (props) => {
    const { featured, recipes } = props;

    return (
        <div>
            <Header featured={featured} />
            <div className={styles.background}>
                <div className={`container`}>
                    <h1>List of our Recipes</h1>
                    {recipes ? recipes.map((recipe, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                                <button className='btn-primary'><Link to={`/recipes/edit/${recipe._id}`}>Edit</Link></button>
                            </li>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default List;