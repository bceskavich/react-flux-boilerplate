import React, { Component, PropTypes } from 'react';
import omit from 'lodash/object/omit';

export default class LoggedIn extends Component {

  static propTypes = {
    // ReactRouter props
    history: PropTypes.object,
    children: PropTypes.object,

    // AppStore props
    loggedIn: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.transitionIfNotLoggedIn();
  }

  componentDidUpdate() {
    this.transitionIfNotLoggedIn();
  }

  render() {
    const { children } = this.props;

    return (
      <span>
        {children && React.cloneElement(children, {
          ...omit(this.props, 'children')
        })}
      </span>
    );
  }

  transitionIfNotLoggedIn() {
    const { loggedIn, history } = this.props;
    if (!loggedIn) {
      history.pushState(null, '/');
    }
  }
}
