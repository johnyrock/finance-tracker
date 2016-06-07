var init_stock_lookup;

init_stock_lookup = function() {
  $("#stock-lookup-form").on("ajax:before", function(event, data, status){
    hide_stock_list();
    hide_stock_lookup();
    show_spinner();
  });
  
  $("#stock-lookup-form").on("ajax:after", function(event, data, status){
    show_stock_list();
    show_stock_lookup();
    hide_spinner();
  });
  
  $("#stock-lookup-form").on("ajax:success", function(event, data, status) {
    show_stock_list();
    show_stock_lookup();
    $("#stock-lookup").replaceWith(data);
    init_stock_lookup();
  });
  
  $("#stock-lookup-form").on("ajax:error", function(event, xhr, status, error){
    show_stock_list();
    show_stock_lookup();
    hide_spinner();
    $("#stock-lookup-results").replaceWith(" ");
    $("#stock-lookup-errors").replaceWith("Stock was not found");
  });
}

$(document).ready(function() {
  init_stock_lookup();
})