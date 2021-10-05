import { Button } from '@lib/Button';
import { TextField } from '@lib/TextField';
import { UserLoginModel } from '@models/userModel';
import { Form, Formik, FormikHelpers } from 'formik';
import { ReactElement, useState } from 'react';

interface Props {
  handleSubmitFormFunc: (data: UserLoginModel) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormData: UserLoginModel = {
  email: '',
  password: '',
};

export const LoginForm = (props: Props): ReactElement => {
  const { handleSubmitFormFunc } = props;
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = (
    values: UserLoginModel,
    actions: FormikHelpers<UserLoginModel>
  ): void => {
    handleSubmitFormFunc(values);
    actions.resetForm();
  };

  const handleValidate = (values: UserLoginModel): FormErrors => {
    const errors: FormErrors = {};
    const { email, password } = values;

    if (!email) {
      errors.email = 'Field required';
    }
    if (!password) {
      errors.password = 'Field required';
    }

    const isErrorsEmpty = Object.keys(errors).length === 0;
    setSubmitDisabled(!isErrorsEmpty);

    return errors;
  };

  return (
    <Formik
      initialValues={initialFormData}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {/* TODO: find type for props below */}
      {() => (
        <Form className='flex flex-col'>
          <TextField attribute='email' required type='email'>
            Email
          </TextField>
          <TextField attribute='password' required type='password'>
            Password
          </TextField>

          <Button type='submit' disabled={submitDisabled}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
