$(document).ready(function(){
    $(".ad").fadeOut(5000).fadeIn(5000)

    $(".popup-wrapper").hide();
    $(".random-btn").click(function(){
        $(".popup-wrapper").show();
    })

    $(".random-btn").click(function(){
        $(".popup-wrapper").show();
    })
    $(".random-btn").click(function(){
        $(".popup-wrapper").close();
    })

    $(".close-btn").click(function() {
        $(".popup-wrapper").hide();
    });
})