import Ember from 'ember';

export default Ember.Component.extend({
  userAdmin: false,
  actions: {
    signIn() {
      this.set('userAdmin', !this.userAdmin);
      this.userAdmin? this.get('router').transitionTo('admin') : this.get('router').transitionTo('index');
    }
  }
});
