import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    return Ember.$.getJSON("http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zip + "&apikey=" + key).then(function(response) {
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
