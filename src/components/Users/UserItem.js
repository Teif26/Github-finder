import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({
  user: { login, avatar_url, html_url }
}) => {
  return (
    <div
      className='card text-center'
      style={{ backgroundColor: 'lightBlue' }}>
      <img
        src={avatar_url}
        alt='oops'
        className='round-img'
        style={{ width: '80px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user${login}`}
          className='btn btn-dark btm-sm my-1'>
          Go!
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
