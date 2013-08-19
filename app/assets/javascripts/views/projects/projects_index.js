Portfolio.Views.ProjectsIndex = Backbone.View.extend({
  template: HandlebarsTemplates['projects/index'],
  initialize: function(){
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    $(this.el).html(this.template({collection: this.collection}));
    return this;
  }
});