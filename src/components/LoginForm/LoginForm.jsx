import {
  AddButton,
  Input,
  InputWrapper,
  Placeholder,
  StyledForm,
} from 'components/LoginForm/LoginForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().trim(),
});

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
            <Input type="email" name="email" required="required" />
            <Placeholder>E-mail</Placeholder>
          </InputWrapper>
          <InputWrapper>
            <Input type="password" name="password" required="required" />
            <Placeholder>Password</Placeholder>
          </InputWrapper>

          <AddButton type="submit">Log In</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
