document
    .addEventListener('click', function() {
        var elements = document.querySelectorAll('p')
        for (var element of elements) {
            if (element.innerText == "Foo") {
                element.innerText = "Barr"
            }  else  {
                element.innerText = "Foo"
            }  
        }
    })

// //Jāņa variants
// document
//     .getElementById('bt5')
//     .addEventListener('click', function (){
//         var paragraphs = document.querySelectorAll('p')
//         for (var element of elements) {
//             if (element.innerText == "Foo") {
//                 element.innerText = "Barr"
//             }  else  {
//                 element.innerText = "Foo"
//             }  
//         }
//     })