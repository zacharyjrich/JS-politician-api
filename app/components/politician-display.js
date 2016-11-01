import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('politician.first_name', 'politician.last_name', function() {
    return this.get('politician.first_name') + " " + this.get('politician.last_name');
  }),
  age: Ember.computed('politician.birthday', function() {
    var bDate = new Date(this.get('politician.birthday'));
    var now = new Date();
    var lifeDuration = now.getFullYear() - bDate.getFullYear();
    return lifeDuration;
  }),
  youTubeUrl: Ember.computed('politician.youtube_id', function() {
    return 'http://www.youtube.com/' + this.get('politician.youtube_id');
  })
});
