import { Link } from 'react-router-dom';

import Logo from '../images/Logo.png';

import styles from '../styles/header.module.css';

const Header = (props) => {
    const { featuredRecipe } = props;

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>
                <nav className={styles.nav}>
                    {featuredRecipe ?
                        <Link to={`/recipes/details/${featuredRecipe._id}`}>Feature</Link>
                    : null}
                    <Link to='/new-recipe'>Add A Recipe</Link>
                    <Link to='/recipes'>All Recipes</Link>
                </nav>
            </div>
            <div className={styles.login}>

            </div>
        </div>
    )
}

export default Header;