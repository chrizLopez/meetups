import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({image, title, description, address}) => {
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
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;