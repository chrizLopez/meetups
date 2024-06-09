import { useContext } from "react";
import { FavoritesContext  } from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const {favorites, totalFavorites} = useContext(FavoritesContext);

  let content;

  if (totalFavorites === 0) {
    content = <p>You have no favorites. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favorites} />
  }

  console.log(favorites);
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage;