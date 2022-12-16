import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">
        <img alt="Page not found" src={require('./404_pages.jpg')} style={{width: '100%'}}/>
      </Link>
    </div>
  )
}

export default NotFoundPage;