import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeQuery() {
      this.sendAction('makeQuery', this.get('zip'));
    }
  }
});
