// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css'

// const Navigation = () => {
//   return (
//     <nav className={styles.nav}>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/contacts">Contacts</NavLink>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css'

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
