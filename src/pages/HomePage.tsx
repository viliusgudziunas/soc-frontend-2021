import { PageContainer } from '@components/containers';
import { AddWorkoutForm } from '@components/forms';
import { AuthContext } from '@contexts/authContext';
import { Header } from '@lib/Header';
import { ApiService } from '@services/apiService';
import { AuthService } from '@services/authService';
import { ToastService } from '@services/toastService';
import { AddWorkoutModel } from '@shared/types';
import { ReactElement, useContext } from 'react';
import { Redirect } from 'react-router';

export const HomePage = (): ReactElement => {
  const { isLoggedIn } = useContext(AuthContext);
  const handleAddWorkout = (data: AddWorkoutModel): void => {
    const authToken = AuthService.getAuthToken();

    ApiService.addWorkout(data, authToken)
      .then(() => {
        ToastService.success('Workout submitted successfully!');
      })
      .catch(() => {
        // TODO: Get error message from backend
        ToastService.error('An issue has occurred!');
      });
  };

  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  }

  return (
    <PageContainer>
      <Header>Submit workout</Header>
      <AddWorkoutForm handleSubmitFormFunc={handleAddWorkout} />
    </PageContainer>
  );
};
