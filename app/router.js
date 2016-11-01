import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('location', {path: 'location/:zip'});
  this.route('politician', {path: 'politician/:last_name'});
});

export default Router;
