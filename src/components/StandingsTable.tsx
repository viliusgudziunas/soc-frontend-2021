import { AuthContext } from '@contexts/authContext';
import { ClassObjectModel } from '@models/com';
import { FailedRequestResponse } from '@models/requestsModel';
import { ApiService, StandingsResponse } from '@services/apiService';
import { AuthService } from '@services/authService';
import { ToastService } from '@services/toastService';
import Utils from '@shared/utils';
import { AxiosError, AxiosResponse } from 'axios';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

interface StandingsDto {
  caloriesBurnt: number;
  timeSpent: string;
  userId: number;
  name: string;
}

export const StandingsTable = (): ReactElement => {
  const [standings, setStandings] = useState<StandingsDto[]>([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const trClasses: ClassObjectModel = { 'hover:bg-blue-300': true };

  useEffect(() => {
    const authToken = AuthService.getAuthToken();
    ApiService.getStandings(authToken)
      .then((response: AxiosResponse<StandingsResponse>) =>
        setStandings(response.data.data)
      )
      .catch((error: AxiosError) => {
        const response = error.response as AxiosResponse<FailedRequestResponse>;

        if (response) {
          if (response.status === 401) {
            AuthService.clearAuthToken();
            setIsLoggedIn(false);
          }
        }

        const reason = response?.data?.data.reason ?? 'An issue has occurred!';
        ToastService.error(reason);
      });
  }, []);

  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  }

  return (
    <table className='m-6 divide-y'>
      <thead>
        <tr className='bg-blue-200'>
          <th className='px-8 py-5'>Place</th>
          <th className='px-8 py-5'>Name</th>
          <th className='px-8 py-5'>Calories burnt</th>
          <th className='px-8 py-5'>Time spent</th>
        </tr>
      </thead>
      <tbody className='divide-y'>
        {standings.map((entry: StandingsDto, index: number) => {
          const { userId, name, caloriesBurnt, timeSpent } = entry;

          const indexIsEven = index % 2 === 0;
          trClasses['bg-white'] = indexIsEven;
          trClasses['bg-gray-200'] = !indexIsEven;

          const className = Utils.makeClassName(trClasses);

          return (
            <tr className={className} key={userId}>
              <td className='p-8 py-5 text-center'>{index + 1}</td>
              <td className='p-8 py-5'>{name}</td>
              <td className='p-8 py-5 text-center'>{caloriesBurnt}</td>
              <td className='p-8 py-5 text-center'>{timeSpent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
