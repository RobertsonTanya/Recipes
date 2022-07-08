import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import ChickenPotPie from '../images/chickenPotPie.png';

import styles from '../styles/home.module.css';

const Home = (props) => {
    const { featured } = props;




    return (
        <div>
            <Header featured={featured} />
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
            {featured && featured.ingredients ?
                <div className={styles.feature}>
                    <div className={`container ${styles.container}`}>
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
                            <img className={styles.featureImage} src={featured.image} alt={featured.name} />
                        </div>
                        <div className={styles.featureRight}>
                            <h2>{featured.name}</h2>
                            <h3>Instructions:</h3>
                            <p>{featured.instructions}</p>
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
                        <button className='btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;