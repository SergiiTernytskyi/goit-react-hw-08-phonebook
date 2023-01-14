import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => {
  return (
    <main>
      {/* <Helmet> */}
      <title>Registration</title>
      {/* </Helmet> */}
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
