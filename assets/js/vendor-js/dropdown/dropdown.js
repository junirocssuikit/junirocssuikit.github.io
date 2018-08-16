//Custom-code for dropdown Js
//Plain-Dropdown
$('.dropdown .button').click(function (e) {
    e.stopPropagation();
    $('#dropdown-menu').toggleClass('open');
    return $('#dropdown-menu li a').removeClass();
});
$('#dropdown-menu li a').click(function (e) {
    $(this).addClass("flash");
    return $('#dropdown-menu').removeClass('open');
});
$('html').click(function () {
    return $('#dropdown-menu').removeClass('open');
});

//Select-Dropdown
$('.js-select-dropdown').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
});

$('.js-select-dropdown [data-select-dropdown-value]').click(function (e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-select-dropdown');
    $dropdown.find('.js-select-dropdown__input').val($item.data('select-dropdown-value'));
    $dropdown.find('.js-select-dropdown__current').text($item.text());
});

$('.select-dropdown').click(function (e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-select-dropdown')) {
        $('.js-select-dropdown').removeClass('is-open');
    }
});
