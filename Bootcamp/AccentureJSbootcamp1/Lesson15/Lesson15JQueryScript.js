console.log(jQuery)

// tas pats
console.log($) 

// // šis ir tas pats kas 
// document.getSelector('#btn1).addEventListener('click', function(){})

//Šitais samaina nosaukumu
$('#btn1').click(function() {
    var paragraphs = $('p')
    if (paragraphs.html() == 'Foo') {
        paragraphs.html('Bar')
    } else {
        paragraphs.html('Foo')
    }
})

// Šitais noslēpj
$('#btn1').click(function() {
    var paragraphs = $('p')

    if (paragraphs.html() == 'Foo') {
        paragraphs.html('Bar')
        paragraphs.hide()
    } else {
        paragraphs.html('Foo')
        paragraphs.show()
    }
})

// Šitais noslēpj lēnām
$('#btn1').click(function() {
    var paragraphs = $('p')

    if (paragraphs.html() == 'Foo') {
        paragraphs.html('Bar')
        paragraphs.hide(5000)
    } else {
        paragraphs.html('Foo')
        paragraphs.show(5000)
    }
})

//To Do List
$('#add-task').click(function() {
    var newTaskName = $('#new-task').val()
    var newTask = $('<li>').html(newTaskName)
    $('ul').append(newTask)
    $('#new-task').val('') 
})

// $('li').click(function() {
//     $(this).toggleClass('completed')
// })

$(document).on('click', 'li', function() {
    $(this).toggleClass('completed')
})