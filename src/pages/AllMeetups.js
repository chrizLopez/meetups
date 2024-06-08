import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    fetch(
      'https://test-functions-7bd28-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json();
    }).then ((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setData(meetups);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  };

  return (
    <div>
      <h1>All Meetups Page</h1>
      <ul>
        <MeetupList meetups={data} />
      </ul>
    </div>
  )
}

export default AllMeetupsPage;