import { Link } from 'react-router-dom';

import Logo from '../images/Logo.png';

import styles from '../styles/header.module.css';

const Header = (props) => {
    const { featured } = props;

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>
                <nav className={styles.nav}>
                    <Link to={`/recipes/details/${featured._id}`}>Feature</Link>
                    <Link to='/new-recipe'>Add A Recipe</Link>
                </nav>
            </div>
            <div className={styles.login}>

            </div>
        </div>
    )
}

export default Header;