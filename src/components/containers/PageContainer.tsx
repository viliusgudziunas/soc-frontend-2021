import { ReactElement, ReactNode } from 'react';

type Props = { children?: ReactNode | undefined };

export const PageContainer = (props: Props): ReactElement => {
  const { children } = props;

  return (
    <div className='flex-row'>
      <div className='flex-col bg-white m-12 p-10 rounded'>{children}</div>
    </div>
  );
};

PageContainer.defaultProps = { children: undefined } as Partial<Props>;
