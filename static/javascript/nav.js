function navActiveState() {
    console.log("navActiveState");
    $("ul.navbar-nav > li > a").click(
      function (e) {
        $("ul.navbar-nav > li > a").removeClass(
          "active");
        $("ul.navbar-nav > li > a").css(
          "color", "");

        $(this).addClass("active");
    });
}
