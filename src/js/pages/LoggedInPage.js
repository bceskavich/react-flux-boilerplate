import React, { Component, PropTypes } from 'react';

export default class LoggedInPage extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool
  }

  render() {
    console.log(this.props);
    return (
      <div className='logged-in'>
        <h1>Hey</h1>
      </div>
    );
  }
}
