import {
  RegButton,
  Input,
  StyledForm,
  Label,
} from 'components/RegistrationForm/RegisttrationForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().trim(),
});

const initialValues = { name: '', email: '', password: '' };

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const submitHandler = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={registerSchema}
      >
        <StyledForm autoComplete="off">
          <Label>
            Username
            <Input type="text" name="name" placeholder="Enter username" />
          </Label>

          <Label>
            Email
            <Input type="email" name="email" placeholder="Enter email" />
          </Label>

          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </Label>

          <RegButton type="submit">Register</RegButton>
        </StyledForm>
      </Formik>
    </>
  );
};
