import { Link } from "react-router-dom";

import Header from './Header';
import ChickenPotPie from '../images/chickenPotPie.png';

import styles from '../styles/home.module.css';

const Home = (props) => {
    const { featuredRecipe, recipes } = props;

    return (
        <div>
            <Header featuredRecipe={featuredRecipe} />
            <div className={`background ${styles.background}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.left}>
                        <h1>ByTanyaR's <span>Recipes</span></h1>
                        <p>A collection of mouthwatering, yet fast and easy, recipes for Tanya to cook.</p>
                        <button className='btn-primary'><Link to='/recipes'>Get Started</Link></button>
                    </div>
                    <div className={styles.right}>
                        <img src={ChickenPotPie} alt="Chicken Pot Pie" />
                    </div>
                </div>
            </div>
            <div className={`container ${styles.container} ${styles.marketing}`}>
                <div>
                    <h2>{recipes.length} recipes</h2>
                    <p>Free trial</p>
                </div>
                <div>
                    <h2>+12</h2>
                    <p>Active users</p>
                </div>
                <div>
                    <h2>15 min</h2>
                    <p>solutions</p>
                </div>
            </div>
            {Object.keys(featuredRecipe).length ?
                <div className={styles.feature}>
                    <div className={`container ${styles.container}`}>
                        <div className={styles.titles}>
                            <div className={styles.featureLeft}>
                                <h2>Featured Recipe:</h2>
                            </div>
                            <div className={styles.featureRight}>
                                <h2><Link to={`/recipes/details/${featuredRecipe._id}`}>{featuredRecipe.name}</Link></h2>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.featureLeft}>
                                <h3>Ingredients:</h3>
                                <p>{featuredRecipe.ingredients}</p>
                                <img className={styles.featureImage} src={featuredRecipe.image} alt={featuredRecipe.name} />
                            </div>
                            <div className={styles.featureRight}>
                                <h3>Instructions:</h3>
                                <p>{featuredRecipe.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            : null }
            <div className={styles.cooking}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.left}>
                        <h3>What are you waiting for?</h3>
                        <h2>Let's get cooking!</h2>
                    </div>
                    <div className={styles.right}>
                        <button className='btn-primary'><Link to='/recipes'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;