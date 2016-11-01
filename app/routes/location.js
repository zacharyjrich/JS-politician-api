import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON("http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zip + "&apikey=bb73f356d9af4cafa745ce3170b578b3").then(function(response) {
      var results = response.results;
      console.log(results);
      return results;
    });
  },
  actions: {
    requestPolitician(lastName) {
      this.transitionTo('politician', lastName);
    }
  }
});
