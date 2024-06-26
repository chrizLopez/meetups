import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

const MainNavigation = () => {
  const {totalFavorites} = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={styles.badge}>{totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;