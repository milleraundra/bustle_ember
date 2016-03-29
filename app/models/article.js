import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  writer: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  tags: DS.attr(),
  img: DS.attr()
});
