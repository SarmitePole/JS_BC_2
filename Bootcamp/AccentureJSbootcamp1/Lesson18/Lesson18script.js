$('#date').datepicker();

$('#destroy-date').click(function() {
    $('#date').datepicker('destroy');
})

// tabs
$(function() {
    $("#tabs").tabs();
});

$(function() {
    var tabs = $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
      axis: "x",
      stop: function() {
        tabs.tabs("refresh");
      }
    });
});

