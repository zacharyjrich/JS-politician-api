import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    makeQuery(params) {
      this.transitionTo('location', params);
    }
  }
});
