// uz button click maina nosaukumu
$('#btn1').click(function() {
    var paragraphs = $('.p');
    var newValue = $('#new-value').val();

    paragraphs.text(newValue);
})


// uz enteri samaina vērtību
$('#new-value').keypress(function(burkans) {
 
    if (burkans.which == 13) {
        var input = $('#new-value')
        $('.p').html(input.val())
        input.val('')
    }
})

// citc ------

$('.tabs-head a').click(function(event) {
    event.preventDefault();

    // 1.return false; tāpat kā 2.event.preventDefault(), lai links nesāk gribēt aizlinkoties vai arī iekš html ieliek <a href="javascript:;" class="active">Tab 1</a>

    $('.tabs-head a').removeClass('active')

    $(this).addClass('active')
    var tabId = $(this).attr('data-tab')
    console.log(tabId)

    $('.tab').removeClass('active')
    $('#' + tabId).addClass('active')


})