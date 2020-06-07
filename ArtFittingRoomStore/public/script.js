// Choosing interior
$('.small-image-interior').hover(function () { /* atrod bildi, pievieno funkciju, ka uz hover notiks kaut kas */

    var currentImgSrc = $(this).attr('src'); /* uzzinam kāda ir src vērtība tai bildei uz kuras ir pašlaik hover */

    $('.main-image-interior').attr('src', currentImgSrc); /* atrodam lielo bildi, no viņas atribūtiem izvēlamies SRC un pasakam, ka tas būs kaut kāds cits */
})

// Choosing painting
$('.small-image-painting').hover(function () {
    var currentImgSrc = $(this).attr('src');

    $('.main-image-painting').attr('src', currentImgSrc);
})

