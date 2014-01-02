(function ($) {
    $.fn.progessbar = function (value) {
        var value = value + "%"|| 0 + "%";
        $(this).find(".progressbar_text").text(value);
        $(this).find(".progressbar_strip").width(value);
    };
})(jQuery);

$(document).ready(function () {
    var progressValue,
        interval = 500,
        progress = 0;
    var progressInterval = setInterval(function () {
        progressValue = Math.floor(Math.random() * 25 + 5);
        interval = Math.floor(Math.random() * 100 + 1);
        progress += progressValue;
        if (progress < 100) {
            $(".progressbar").progessbar(progress);
        } else {
            $(".progressbar").progessbar(100);
            clearInterval(progressInterval);
        }

    }, interval);

});