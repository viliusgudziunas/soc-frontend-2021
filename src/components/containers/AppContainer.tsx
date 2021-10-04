import { ReactElement, ReactNode } from 'react';

type Props = { children?: ReactNode | undefined };

export const AppContainer = (props: Props): ReactElement => {
  const { children } = props;

  return <div className='container flex flex-row mx-auto'>{children}</div>;
};

AppContainer.defaultProps = { children: undefined } as Partial<Props>;
