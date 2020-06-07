// articles.html
$('.small-image').hover(function() { /* atrod bildi, pievieno funkciju, ka uz hover notiks kaut kas */

    var currentImgSrc = $(this).attr('src'); /* uzzinam kāda ir src vērtība tai bildei uz kuras ir pašlaik hover */
  
    $('#main-image').attr('src', currentImgSrc); /* atrodam lielo bildi, no viņas atribūtiem izvēlamies SRC un pasakam, ka tas būs kaut kāds cits */
  
})
  
// AboutUs
$(function() {
    $("#tabs").tabs()
});

$(function() {
    var tabs = $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
    stop: function() {
        tabs.tabs("refresh");
    }
});


// chat
$('#send-btn').click(function() {
    var usernameInput = $('#userNameInput').val();
    var mesageInput = $('#messageInput').val();
    var messageTime = new Date().toString().slice(0, 21).substring(3);
    var newP = $('<p><strong>' + usernameInput + '</strong>' + ' ' + '<style="color:grey">' + messageTime + '</style>' + '</p>' + '<p>' + mesageInput + '</p>' + '<hr>') ;

$('#wrapper').append(newP)
$('#userNameInput').val('')
$('#messageInput').val('')

})
});