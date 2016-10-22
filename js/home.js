$(document).ready(function() {

  $("#licensing").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").show();
      $("#specialist-box").hide();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#content").click(function(e){
      $("#content-box").show();
      $("#licensing-box").hide();
      $("#specialist-box").hide();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#specialist").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").hide();
      $("#specialist-box").show();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#services").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").hide();
      $("#specialist-box").hide();
      $("#services-box").show();
      e.preventDefault();
  });

});
