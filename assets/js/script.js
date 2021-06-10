//Tooltips
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})
//Animación AVION
let tmp=0
$("#footer_text").mouseover(function () {
    if(tmp == 0) {
        tmp = 1
        $("#footer_icon").removeAttr("style")
        $("#footer_icon").animate({"padding-left": "+=" + ($("#footer_icon").parent().width()/2) + "px"}, 2000, null, function(){tmp = 0});

        $("#footer_icon").removeAttr("style")
        $("#footer_icon").attr("display", "none")
    }
})
//SmoothScroll
$(".scroll-hash").click(function (event){
    event.preventDefault();

    var url=this.hash;

    $("html").animate(
        {
            scrollTop: $(url).offset().top - 50,
        },200
    )
})
//Hover para los iconos de las RRSS
$( ".rrss-icons" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
});
//Typeform - Formulario
let qs, js, q, s, d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q)
}