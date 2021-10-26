import { ReactElement } from 'react';

interface Props {
  name: string;
  value: string | number | undefined;
}

export const ProfileStatistic = (props: Props): ReactElement => {
  const { name, value } = props;

  return (
    <div>
      * {name}: <span className='font-bold'>{value}</span>
    </div>
  );
};
