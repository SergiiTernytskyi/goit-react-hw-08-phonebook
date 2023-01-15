import {
  AddButton,
  Input,
  InputWrapper,
  Placeholder,
  StyledForm,
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
          <InputWrapper>
            <Input type="text" name="name" required="required" />
            <Placeholder>Username</Placeholder>
          </InputWrapper>

          <InputWrapper>
            <Input type="email" name="email" required="required" />
            <Placeholder>Email</Placeholder>
          </InputWrapper>

          <InputWrapper>
            <Input type="password" name="password" required="required" />
            <Placeholder>Password</Placeholder>
          </InputWrapper>

          <AddButton type="submit">Register</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
