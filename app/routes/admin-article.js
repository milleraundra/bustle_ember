import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    editRecord(article, params){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },
    deleteRecord(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    }

  }
});
