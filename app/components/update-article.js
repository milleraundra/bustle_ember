import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', !this.showUpdateForm);
    },
    sendUpdate(article, flag){
      console.log(flag);
      var params = {
        title: this.get('title'),
        writer: this.get('writer'),
        text: this.get('text'),
        img: this.get('img'),
      };
      flag? this.sendAction('create', params): this.sendAction('update', article, params);
    }
  }
});
