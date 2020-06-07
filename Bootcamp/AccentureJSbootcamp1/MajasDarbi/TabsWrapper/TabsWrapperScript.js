

$('.chunk a').click(function(event) {
    event.preventDefault();

    // 1.return false; tāpat kā 2.event.preventDefault(), lai links nesāk gribēt aizlinkoties vai arī 3. iekš html ieliek <a href="javascript:;" class="active">Tab 1</a>

    $('.tabs-head').removeClass('active')

    $(this).addClass('active')
    var tabId = $(this).attr('data-tab')

    $('.tab').removeClass('active')
    $('#' + tabId).addClass('active').toggle()


})