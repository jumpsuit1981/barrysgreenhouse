$(function() {

  $("#subnav a").click(function(e) {
    e.preventDefault();
    var sel = $(e.currentTarget).attr('href');
    $.scrollTo(sel, {
      duration: 200,
      offset: -250
    });
  })
});
