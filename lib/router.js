Router.configure({
  layoutTemplate: 'layoutOne'
});

Router.map(function() {

  this.route('petsList', {path: '/'});
  this.route('petPage', {path: 'needs-a-home-for/:_id'});
  this.route('aboutUs', {path: 'about-adoptim'});
  this.route('petsInWatchlist', {path: 'my-watchlist'});
  this.route('test', {path: 'test'});
});
