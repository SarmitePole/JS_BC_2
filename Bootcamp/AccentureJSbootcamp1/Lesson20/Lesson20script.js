$('.small-image').hover(function() { /* atrod bildi, pievieno, ka uz hover notiks kaut kas */

    var currentImgSrc = $(this).attr('src'); /* uzzinam kāda ir src vērtība tai bildei uz kuras ir pašlaik uzbraukts */


    $('#main-image').attr('src', currentImgSrc); /* atrodam lielo bildi, no viņas atribūtiem izvēlamies SRC un pasakam, ka tas būs kaut kāds cits */


})


