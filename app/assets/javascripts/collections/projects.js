Portfolio.Collections.Projects = Backbone.Collection.extend({

  model: Portfolio.Models.Project,
  url: 'api/projects'

});