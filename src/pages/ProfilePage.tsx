import { PageContainer } from '@components/containers';
import { UserContext } from '@contexts/userContext';
import { Header } from '@lib/Header';
import { ProfileStatistic } from '@lib/ProfileStatistic';
import profileImage from '@static/profile-monkey.png';
import moment from 'moment';
import { ReactElement, useContext } from 'react';

export const ProfilePage = (): ReactElement => {
  const { user } = useContext(UserContext);
  const createdAtDate = moment(user?.createdAt).format('YYYY-MM-DD');

  return (
    <PageContainer>
      <Header>Profile</Header>
      <div className='flex flex-row'>
        <div className='block h-50 w-40'>
          <img src={profileImage} alt='Avatar' className='object-contain' />
        </div>
        <div className='flex-col ml-10 mt-10'>
          <div className='text-xl'>{user?.name}</div>
        </div>
      </div>
      <div className='my-5 text-xl'>My stats</div>
      {/* // TODO: tailwind has support for lists I think */}
      <ProfileStatistic name='Registered on' value={createdAtDate} />
      {/* <ProfileStatistic name='Calories burnt' value={totalCalories} /> */}
    </PageContainer>
  );
};
