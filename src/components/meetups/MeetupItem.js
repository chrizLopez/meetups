import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import { useContext } from "react";
import { FavoritesContext  } from "../../store/favorites-context";

const MeetupItem = ({image, title, description, address, id}) => {
  const {itemIsFavorite, removeFavorite, addFavorite} = useContext(FavoritesContext);

  const isFavorite = itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        title,
        image,
        description,
        address,
      });
    }
  }
  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;