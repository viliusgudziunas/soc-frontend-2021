import { AuthContext } from '@contexts/authContext';
import { NavbarLink } from '@lib/NavbarLink';
import { ReactElement, useContext } from 'react';

export const Navbar = (): ReactElement => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='flex flex-row border-b-2 bg-white'>
      {/* // TODO: Add icon here */}
      {/* <div className='m-6 mr-12'>Icon here</div> */}
      <NavbarLink to='/'>Home</NavbarLink>

      {/* {isLoggedIn ? <NavbarLink to='/standings'>Standings</NavbarLink> : null} */}

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
