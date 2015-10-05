import React, { Component, PropTypes } from 'react';
import HomePageComponent from '../components/home/HomePageComponent';

export default class HomePage extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool
  }

  render() {
    return (
      <div className='home'>
        <HomePageComponent />
      </div>
    );
  }
}
