import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const submitHandler = (meetupData) => {
    fetch(
      'https://test-functions-7bd28-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        navigate('/');
      });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={submitHandler}/>
    </section>
  )
}

export default NewMeetupPage;