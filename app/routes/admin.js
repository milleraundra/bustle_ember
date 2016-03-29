import Ember from 'ember';

export default Ember.Route.extend({
  model(query) {
    return this.store.filter('article', function(article){
        return article.get('title') === 'Horsey';
            });
  },
  actions: {
    create(params){
      params.date = new Date();
      params.tags = ['a', 'b', 'c'];
      console.log(params);
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
    search(query) {
      console.log(query instanceof String);
      this.model(query);
      console.log(this.model(query));
    }
  }
});
