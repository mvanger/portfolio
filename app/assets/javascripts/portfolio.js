window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Portfolio.Routers.Projects;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Portfolio.initialize();
});
