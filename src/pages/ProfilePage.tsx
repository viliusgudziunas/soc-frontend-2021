import { PageContainer } from '@components/containers';
import { Header } from '@lib/Header';
import { ProfileStatistic } from '@lib/ProfileStatistic';
import { UserDto } from '@shared/types';
import { ReactElement } from 'react';

// TODO: get this object from react context
const user: UserDto = {
  createdOn: '12.09.2021...',
  email: 'test@test.com',
  name: 'Test User',
  totalCalories: 4000,
};

export const ProfilePage = (): ReactElement => {
  const { name, email, createdOn, totalCalories } = user;

  return (
    <PageContainer>
      <Header>Profile</Header>
      <div className='flex flex-row'>
        <div className='block bg-red-400 h-40 w-40' />
        <div className='flex-col ml-10 mt-10'>
          <div className='text-xl'>{name}</div>
          <div className='text-gray-400'>{email}</div>
        </div>
      </div>
      <div className='my-10 text-xl'>My stats</div>
      {/* // TODO: tailwind has support for lists I think */}
      <ProfileStatistic name='Registered on' value={createdOn} />
      <ProfileStatistic name='Calories burnt' value={totalCalories} />
    </PageContainer>
  );
};
