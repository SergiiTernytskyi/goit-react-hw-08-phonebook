import {
  LoginButton,
  Input,
  StyledForm,
  Label,
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
          <Label>
            Email
            <Input type="email" name="email" placeholder="Enter Your email" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Enter Your password"
            />
          </Label>

          <LoginButton type="submit">Log In</LoginButton>
        </StyledForm>
      </Formik>
    </>
  );
};
