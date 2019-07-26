$("#menu-bar").click(function () {
    var icon = $("#menu-bar i");
    if (icon.hasClass("fas fa-bars")) {
        icon.removeClass("fas fa-bars");
        icon.addClass("fas fa-times");
        $("nav").animate({ height: "200px" }, 300);
    } else {
        icon.removeClass("fas fa-times");
        icon.addClass("fas fa-bars");
        $("nav").animate({ height: "60px" }, 300);
    }
    $("#main-ul").slideToggle(300);
});
