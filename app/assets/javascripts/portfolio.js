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
  clickAbout();
  clickProjects();
  clickContact();
  clickName();
  clickImage();
  hoverIcon();
});


function clickAbout(){
  $('#span-about').on('click', function(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 750);
  });
}

function clickName() {
  $('#navbar-top-left').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#page-top-container').offset().top
    }, 750);
  });
}

function clickProjects() {
  $('#span-projects').on('click', function(){
    $('html, body').animate({
      scrollTop: $("#container").offset().top
    }, 750);
  });
}

function clickContact() {
  $('#span-contact').on('click', function(){
    $('html, body').animate({
      scrollTop: $("#contact-container").offset().top
    }, 750);
  });
}

function clickImage() {
  $('section').on('mouseover', '.image-thumbnail', function(){
    var oldSource = $($($(this)[0]).parent().parent().children().last()).children()
    var newSource = $(this).attr('src');
    oldSource.attr('src', newSource);
  })
}

function hoverIcon() {
  $('.icon').on('mouseenter', function(){
    $(this).css('-webkit-filter', 'grayscale(0)');
  });
  $('.icon').on('mouseleave', function(){
    $(this).css('-webkit-filter', 'grayscale(1)');
  });
}