import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', !this.showUpdateForm);
      console.log(this.showUpdateForm);
    },
    sendUpdate(article){
      var params = {
        title: this.get('title'),
        writer: this.get('writer'),
        text: this.get('text'),
        img: this.get('img'),
      };
      this.sendAction('update', article, params);
    }
  }
});
