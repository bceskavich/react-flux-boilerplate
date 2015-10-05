import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import omit from 'lodash/object/omit';
import AppStore from './stores/AppStore';

@connectToStores
export default class App extends Component {

  static propTypes = {
    // React Router props
    children: PropTypes.object.isRequired,

    // AppStore props
    loggedIn: PropTypes.bool.isRequired
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return AppStore.getState();
  }

  render() {
    const { children } = this.props;

    return (
      <div className='body'>
        {children && React.cloneElement(children, {
          ...omit(this.props, 'children')
        })}
      </div>
    );
  }
}
