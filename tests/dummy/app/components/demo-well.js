import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['demo-well'],
  classNameBindings: ['setHeight:demo-well--set-height'],

  setHeight: false
});
