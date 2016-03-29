import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    create(params){
      params.date = new Date();
      params.tags = ['a', 'b', 'c'];
      console.log(params);
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    }
  }
});
