$('#some-input').keyup(function(event) {
    if(event.keyCode == 27) {
        $(this).val('')
    }


    var currentValue = $(this).val()
    $('#some-heading').html(currentValue)
})

$('#some-btn').click(function() {
    // var newP = $('<p>').html('Bar')
    var currentText = $('#some-input').val()
    var newP = $('<p>' + currentText + '</p>') 

    $('#wrapper').append(newP)
})