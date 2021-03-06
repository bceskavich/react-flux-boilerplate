import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);

    // State values
    this.loggedIn = false;
  }

  onSetUserState(state) {
    this.loggedIn = state;
  }
}

export default alt.createStore(AppStore, 'AppStore');
