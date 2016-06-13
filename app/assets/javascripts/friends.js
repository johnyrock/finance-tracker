var init_friend_lookup;

init_friend_lookup = function() {
  $("#friend-lookup-form").on("ajax:before", function(event, data, status){
    hide_friend_list();
    hide_friend_lookup();
    show_spinner();
  });
  
  $("#friend-lookup-form").on("ajax:after", function(event, data, status){
    show_friend_list();
    show_friend_lookup();
    hide_spinner();
  });
  
  $("#friend-lookup-form").on("ajax:success", function(event, data, status) {
    show_friend_list();
    show_friend_lookup();
    $("#friend-lookup").replaceWith(data);
    init_friend_lookup();
  });
  
  $("#friend-lookup-form").on("ajax:error", function(event, xhr, status, error){
    show_friend_list();
    show_friend_lookup();
    hide_spinner();
    $("#friend-lookup-results").replaceWith(" ");
    $("#friend-lookup-errors").replaceWith("Person was not found");
  });
}

$(document).ready(function() {
  init_friend_lookup();
})