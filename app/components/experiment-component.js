import Ember from 'ember';

export default Ember.Component.extend({

  click() {
    $('.form-group').transition('shake');
  }

});
