$(document).ready(function () {

    const propBtn = $(".properties__btn");
    const propWindow = $(".properties__window")

    const propBtn2 = $(".properties__btn-2");
    const propWindow2 = $(".properties__window-2");

    const propBtn3 = $(".properties__btn-3");
    const propWindow3 = $(".properties__window-3");

    const propBtn4 = $(".properties__btn-4");
    const propWindow4 = $(".properties__window-4");

    propBtn.on("click", function(e) {

        e.preventDefault();

        $(this).toggleClass("properties__btn_active");

        propWindow.toggleClass("properties__window_active");

        // Удаление классов у других кнопок и окон------
        propBtn2.removeClass("properties__btn-2_active");
        propWindow2.removeClass("properties__window-2_active");

        propBtn3.removeClass("properties__btn-3_active");
        propWindow3.removeClass("properties__window-3_active");

        propBtn4.removeClass("properties__btn-4_active");
        propWindow4.removeClass("properties__window-4_active");
        // ______Удаление классов у других кнопок и окон

    });

    propBtn2.on("click", function(e) {

        e.preventDefault();

        $(this).toggleClass("properties__btn-2_active");

        propWindow2.toggleClass("properties__window-2_active");

        // Удаление классов у других кнопок и окон------
        propBtn.removeClass("properties__btn_active");
        propWindow.removeClass("properties__window_active");

        propBtn3.removeClass("properties__btn-3_active");
        propWindow3.removeClass("properties__window-3_active");

        propBtn4.removeClass("properties__btn-4_active");
        propWindow4.removeClass("properties__window-4_active");
        // ______Удаление классов у других кнопок и окон

    });

    propBtn3.on("click", function(e) {

        e.preventDefault();

        $(this).toggleClass("properties__btn-3_active");

        propWindow3.toggleClass("properties__window-3_active");

        // Удаление классов у других кнопок и окон------
        propBtn.removeClass("properties__btn_active");
        propWindow.removeClass("properties__window_active");

        propBtn2.removeClass("properties__btn-2_active");
        propWindow2.removeClass("properties__window-2_active");

        propBtn4.removeClass("properties__btn-4_active");
        propWindow4.removeClass("properties__window-4_active");
        // ______Удаление классов у других кнопок и окон

    });

    propBtn4.on("click", function(e) {

        e.preventDefault();

        $(this).toggleClass("properties__btn-4_active");

        propWindow4.toggleClass("properties__window-4_active");

        // Удаление классов у других кнопок и окон------
        propBtn.removeClass("properties__btn_active");
        propWindow.removeClass("properties__window_active");

        propBtn2.removeClass("properties__btn-2_active");
        propWindow2.removeClass("properties__window-2_active");

        propBtn3.removeClass("properties__btn-3_active");
        propWindow3.removeClass("properties__window-3_active");
        // ______Удаление классов у других кнопок и окон

    });
});