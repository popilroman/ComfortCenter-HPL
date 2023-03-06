$(document).ready(function() {

    const nextSlide = $(".promotion__slide-next");
    const backSlide = $(".promotion__slide-back");
    const sliderLine = $(".promotion__slider-track");

    const itemCount = $(".promotion__slider-item").length;
    const itemWidth = $(".promotion__slider-item").width();
    const generalWidth = itemCount * itemWidth;

    let offset = 0;

    nextSlide.on("click", function() {
        offset += itemWidth;

        if (offset > generalWidth - itemWidth) {
            offset = 0;
        }

        sliderLine.css({"right": offset + "px"});
    });

    backSlide.on("click", function() {
        offset -= itemWidth;

        if (offset < 0) {
            offset = generalWidth - itemWidth;
        }

        sliderLine.css({"right": offset + "px"});
    });
});