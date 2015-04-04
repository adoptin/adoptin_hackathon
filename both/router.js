Router.configure({
  layoutTemplate: 'layoutOne'
});

Router.map(function() {
  this.route('pets', {path: '/'});
  this.route('pet', {path: 'pet/:_id'});
  this.route('aboutUs', {path: 'about-adoptim'});
});
