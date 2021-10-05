import { ReactElement, ReactNode } from 'react';

type Props = { children?: ReactNode };

export const Header = (props: Props): ReactElement => {
  const { children } = props;

  return <div className='mb-9 text-2xl'>{children}</div>;
};

Header.defaultProps = { children: undefined } as Partial<Props>;
