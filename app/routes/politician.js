import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    return Ember.$.getJSON("http://congress.api.sunlightfoundation.com/legislators?query="+params.last_name+"&apikey=" + key).then(function(response){
      var politician = response.results;
      return politician[0];
    });
  }
});
