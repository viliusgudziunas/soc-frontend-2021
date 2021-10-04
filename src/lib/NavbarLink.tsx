import { ClassObjectModel } from '@models/com';
import Utils from '@shared/utils';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  alignDirection?: 'left' | 'right';
  children: ReactNode;
  to: string;
}

export const NavbarLink = (props: Props): ReactElement => {
  const { children, to, alignDirection } = props;

  const [className, setClassName] = useState('');

  const classes: ClassObjectModel = {
    'p-6': true,
    'hover:bg-gray-300': true,
  };

  const setAlignedClass = () => {
    classes['ml-auto'] = alignDirection === 'right';
    classes['mr-auto'] = alignDirection === 'left';
    setClassName(Utils.makeClassName(classes));
  };

  useEffect(() => setAlignedClass(), []);

  return (
    <NavLink to={to} exact className={className} activeClassName='bg-gray-200'>
      {children}
    </NavLink>
  );
};

NavbarLink.defaultProps = { alignDirection: undefined } as Partial<Props>;
