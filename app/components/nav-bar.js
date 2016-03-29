import Ember from 'ember';

export default Ember.Component.extend({
  userAdmin: false,
  actions: {
    signIn() {
      this.set('userAdmin', !this.userAdmin);
    }
  }
});
