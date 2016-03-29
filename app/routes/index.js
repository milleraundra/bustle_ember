import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  
  actions: {
    createArticle(){
      var random = Math.floor(Math.random()*10 + 1);
      var params = {
        title: 'article' + random,
        writer: 'writer' + random,
        text: 'lorem lorem' + random,
        date: new Date(),
        tags: ['a', 'b', 'c'],
        img: 'http://lorempixel.com/500/500/' + random
      };
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
