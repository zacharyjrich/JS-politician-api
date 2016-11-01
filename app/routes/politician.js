import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON("http://congress.api.sunlightfoundation.com/legislators?query="+params.last_name+"&apikey=bb73f356d9af4cafa745ce3170b578b3").then(function(response){
      var politician = response.results;
      console.log(politician[0]);
      return politician[0];
    });
  }
});
