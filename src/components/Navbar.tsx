import { AuthContext } from '@contexts/authContext';
import { NavbarLink } from '@lib/NavbarLink';
import logo from '@static/soc-logo_black.png';
import { ReactElement, useContext } from 'react';

export const Navbar = (): ReactElement => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='flex flex-row border-b-2 bg-white h-16'>
      <img src={logo} alt='SOC Logo' className='object-scale-down' />

      {isLoggedIn ? (
        <>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/standings'>Standings</NavbarLink>
        </>
      ) : null}

      {/* <NavbarLink to='/about'>About</NavbarLink> */}

      {isLoggedIn ? (
        <>
          {/* <NavbarLink to='/profile' alignDirection='right'>
            Profile
          </NavbarLink> */}
          <NavbarLink to='/logout' alignDirection='right'>
            Logout
          </NavbarLink>
        </>
      ) : (
        <>
          <NavbarLink to='/login' alignDirection='right'>
            Login
          </NavbarLink>
          <NavbarLink to='/register'>Register</NavbarLink>
        </>
      )}
    </nav>
  );
};
