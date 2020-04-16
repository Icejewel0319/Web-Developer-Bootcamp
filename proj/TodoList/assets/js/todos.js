//check off specific todos by clicking
// add listener to all entire ul parent
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
    // remove entire li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // not bubble up
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    // check enter key is hitted
    if(event.which === 13){
        // grabbing new todo text from input
        var newTodo = $(this).val();
        $(this).val("")
        // create a anew li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo+ "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})