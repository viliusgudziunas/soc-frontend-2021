import { PageContainer } from '@components/containers';
import { RegisterForm } from '@components/forms';
import { Header } from '@lib/Header';
import { UserRegisterModel } from '@models/userModel';
import { ApiService } from '@services/apiService';
import { ToastService } from '@services/toastService';
import { ReactElement, useState } from 'react';
import { Redirect } from 'react-router';

export const RegisterPage = (): ReactElement => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleSubmitForm = (data: UserRegisterModel): void => {
    ApiService.addUser(data)
      .then(() => {
        ToastService.success('User created!');
        setIsSubmitSuccessful(true);
      })
      .catch(() => {
        // TODO: Get error message from backend
        ToastService.error('An issue has occurred!');
      });
  };

  if (isSubmitSuccessful) {
    return <Redirect to='/login' />;
  }

  return (
    <PageContainer>
      <Header>Register</Header>
      <RegisterForm handleSubmitFormFunc={handleSubmitForm} />
    </PageContainer>
  );
};
