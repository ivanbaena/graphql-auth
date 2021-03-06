import React, { useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import query from '../queries/CurrentUser';
import mutation from '../ mutations/logout';

const Header = () => {
  const { loading, error, data } = useQuery(query);
  const [logout] = useMutation(mutation, {
    refetchQueries: [{ query: query }],
  });

  const onLogoutClick = () => {
    logout();
  };

  const renderButtons = () => {
    if (loading) return <div />;
    if (error) return `Error! ${error.message}`;

    if (data.user) {
      return (
        <div>
          <a href='#' onClick={() => onLogoutClick()}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav className=''>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo left'>
          Home
        </Link>
        <ul className='right'>{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
