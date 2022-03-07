$(function(){
    var navMain = $("#main-navbar-collapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});