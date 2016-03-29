import Ember from 'ember';

export default Ember.Component.extend({
  searchTerm: undefined,
  actions: {
    search() {
      var query = this.get('query');
      this.sendAction('search', query);
    }
  }
});
