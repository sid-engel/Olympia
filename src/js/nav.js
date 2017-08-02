/* Listenner and Transparency Applicator */
$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('nav').css('background','#212121');
} else {
$('nav').css('background','transparent');
}
});
