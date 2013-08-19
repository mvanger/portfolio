Portfolio.Models.Project = Backbone.Model.extend({
  defaults: {
    title: "project",
    link: "example.com",
    description: "description here"
  },
  urlRoot: 'api/projects'
});