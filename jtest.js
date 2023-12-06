$(function(){
    console.log("Lets get ready to party with jQuery!")
});

$('img').addClass('image-center')

$('p').eq(5).remove()

let randomNum = Math.floor(Math.random() * 101);
$('title').css('font-size',randomNum + 'px');

$('<li> Hi </li>').appendTo('ol')

$('ol').append('<p>apologize</p>')

$(".form-control").on('keyup blur change', function () {
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color",
            "rgb(" + red + "," + green + "," + blue + ")");
      });

$('img').on('click',function(e){
    $(e.target).remove();
})