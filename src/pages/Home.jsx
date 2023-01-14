import { Picture } from 'components/Picture/Picture';
import { Title } from 'components/Title/Title';
import phonebook from '../images/Phonebook.jpg';

const Home = () => {
  return (
    <main>
      <Title>Phonebook</Title>
      <Picture phonebook={phonebook} />
    </main>
  );
};

export default Home;
