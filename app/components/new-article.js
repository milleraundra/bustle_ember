import Ember from 'ember';

export default Ember.Component.extend({
  showCreateForm: false,
  actions: {
    showCreateForm() {
      this.set('showCreateForm', !this.showCreateForm);
    },
    sendCreate(){
      var params = {
        title: this.get('title'),
        writer: this.get('writer'),
        text: this.get('text'),
        img: this.get('img'),
      };
      this.sendAction('create', params);
    }
  }
});
