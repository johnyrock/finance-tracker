// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
// require turbolinks
//= require_tree .

var hide_spinner = function(){
  $("#spinner").hide();
}

var show_spinner = function(){
  $("#spinner").show();
}

var hide_stock_list = function(){
  $("#stock-list").hide();
}

var show_stock_list = function(){
  $("#stock-list").show();
}

var hide_stock_lookup = function(){
  $("#stock-lookup-results").hide();
}

var show_stock_lookup = function(){
  $("#stock-lookup-results").show();
}

var hide_friend_list = function(){
  $("#friend-list").hide();
}

var show_friend_list = function(){
  $("#friend-list").show();
}

var hide_friend_lookup = function(){
  $("#friend-lookup-results").hide();
}

var show_friend_lookup = function(){
  $("#friend-lookup-results").show();
}
