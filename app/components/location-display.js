import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('politician.first_name', 'politician.last_name', function() {
    return this.get('politician.first_name') + " " + this.get('politician.last_name');
  }),
  actions: {
    requestPolitician(politician) {
      this.sendAction('requestPolitician', politician.last_name)
    }
  }
});
