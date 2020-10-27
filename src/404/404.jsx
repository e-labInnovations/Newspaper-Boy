import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Page404 = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <Button size='small' component={Link} to='/'>
        Home Page
      </Button>
    </div>
  )
}

export default Page404