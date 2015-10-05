import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import AppStore from './stores/AppStore';

@connectToStores
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return AppStore.getState();
  }

  render() {
    return (
      <div className='body'>
        {this.props.children}
      </div>
    );
  }
}
