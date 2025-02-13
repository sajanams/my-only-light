$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var quote = $("#quote");

    btn_open.click(function() {
        openLetter();
    });

    btn_reset.click(function() {
        closeLetter();
    });

    function openLetter() {
        envelope.addClass("open").removeClass("close");
        quote.fadeIn(1000).delay(2000).fadeOut(1000, function() {
            $("body").fadeOut(1000, function() {
                window.location.href = "home.html"; // Redirect after fade out
            });
        });
    }

    function closeLetter() {
        envelope.addClass("close").removeClass("open");
    }
});
