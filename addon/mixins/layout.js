import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: ['layoutClass', 'justifyClass', 'alignClass', 'flexClass'],

  layoutClass: Ember.computed('elLayout', function() {
    const layout = this.get('elLayout');
    return layout ? `l-${layout}` : '';
  }),

  justifyClass: Ember.computed('elJustify', function() {
    const justify = this.get('elJustify');
    return justify ? `l-justify-${justify}` : '';
  }),

  alignClass: Ember.computed('elAlign', function() {
    const align = this.get('elAlign');
    return align ? `l-align-${align}` : '';
  }),

  flexClass: Ember.computed('elFlex', function() {
    const flex = this.get('elFlex');
    return flex ? `l-flex-${flex}` : '';
  }),
});
