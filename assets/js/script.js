$("#footer_text").mouseover(function () {
    $("#footer_icon").removeAttr("style")
    $("#footer_icon").animate({"padding-left": "+=" + $("#footer_icon").parent().width() + "px"}, 2000);

    $("#footer_icon").removeAttr("style")
    $("#footer_icon").attr("display","none")

})
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