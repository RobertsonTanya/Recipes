import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import ChickenPotPie from '../images/chickenPotPie.png';

import styles from '../styles/home.module.css';

const Home = () => {
    const [ recipes, setRecipes ] = useState({});
    const [ featured, setFeatured ] = useState({});



    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes`)
            .then(res => {
                console.log(res.data);
                setRecipes(res.data);
            })
            .then (() => {
                for(let i=0; i<recipes.length; i++){
                    if(recipes[i].featured === true){
                        console.log('more', recipes[i]._id);
                        axios.get(`http://localhost:8000/api/recipes/${recipes[i]._id}`)
                            .then(res => {
                                console.log('inside', res.data);
                                setFeatured(res.data);
                            })
                            .catch(err => { console.log(err)})
                    }
                }
            })
            .catch(err => { console.log(err)})
    }, []);


    

    return (
        <div>
            <Header />
            <div className={styles.background}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.left}>
                        <h1>ByTanyaR's <span>Recipes</span></h1>
                        <p>A collection of mouthwatering, yet fast and easy, recipes for Tanya to cook.</p>
                        <button className='btn-primary'>Get Started</button>
                    </div>
                    <div className={styles.right}>
                        <img src={ChickenPotPie} alt="Chicken Pot Pie" />
                    </div>
                </div>
            </div>
            <div className={`container ${styles.container}`}>
                <div>
                    <h2>48 recipes</h2>
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
            {featured ?
                <div className={`container ${styles.container} ${styles.feature}`}>
                    <div className={styles.featureLeft}>
                        <h2>Featured Recipe:</h2>
                        <h3>Ingredients:</h3>
                        <ul>
                        {featured.ingredients ? featured.ingredients.map((ingredient, index) => {
                            return (
                                <li key={index}>{ingredient.quantity} {ingredient.measurement} {ingredient.name}</li>
                            )
                        }) : null}
                        </ul>
                    </div>
                    <div className={styles.featureRight}>
                        <h2>{featured.name}</h2>
                        <h3>Instructions:</h3>
                        <p>{featured.instructions}</p>
                    </div>
                </div>
            : null }
        </div>
    )
}

export default Home;