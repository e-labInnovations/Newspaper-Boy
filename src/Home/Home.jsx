import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';


const Home = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
             <i className="material-icons">menu</i>
          </IconButton>
          <Typography variant="h6">
            Newspaper Boy
          </Typography>
        </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Home