import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions('setUserState');
  }
}

export default alt.createActions(AppActions);
