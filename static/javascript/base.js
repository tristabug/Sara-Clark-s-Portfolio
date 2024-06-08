document.addEventListener("DOMContentLoaded", function(){
    getCurrentPage();
}); 

function getCurrentPage() {
    var current = $("#current-page").text();
    setActivePage(current);
}

function setActivePage(current) {
    $("ul.navbar-nav > li > a").removeClass("active");
    $("ul.navbar-nav > li > a").css("color", "");
    var activeItem = $("ul.navbar-nav li" + current + " a");
    activeItem.addClass("active");
}