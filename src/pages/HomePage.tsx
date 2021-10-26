import { PageContainer } from '@components/containers';
import { AddWorkoutForm } from '@components/forms';
import { AuthContext } from '@contexts/authContext';
import { Header } from '@lib/Header';
import { FailedRequestResponse } from '@models/requestsModel';
import { ApiService } from '@services/apiService';
import { LocalStorageService } from '@services/localStorageService';
import { ToastService } from '@services/toastService';
import { AddWorkoutModel } from '@shared/types';
import { AxiosError, AxiosResponse } from 'axios';
import { ReactElement, useContext } from 'react';
import { Redirect } from 'react-router';

export const HomePage = (): ReactElement => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleAddWorkout = (data: AddWorkoutModel): void => {
    const authToken = LocalStorageService.getAuthToken();

    ApiService.addWorkout(data, authToken)
      .then(() => {
        ToastService.success('Workout submitted successfully!');
      })
      .catch((error: AxiosError) => {
        const response = error.response as AxiosResponse<FailedRequestResponse>;

        if (response) {
          if (response.status === 401) {
            LocalStorageService.clearAuthToken();
            setIsLoggedIn(false);
          }
        }

        const reason = response?.data?.data.reason ?? 'An issue has occurred!';
        ToastService.error(reason);
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
