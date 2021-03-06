import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  this.route('themes');
  this.route('theme', { path: '/themes/:theme_id' });

  this.route('export');
});

export default Router;
