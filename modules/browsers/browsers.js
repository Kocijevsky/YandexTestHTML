var browsers = {};
browsers.corruptImages = function(){
    $(".browsers").find(".browsers_image").attr("src","")
}

$(".js_corrupt_images").on("click",
    function(){
        browsers.corruptImages()
    });