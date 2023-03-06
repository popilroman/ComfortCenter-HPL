$(document).ready(function() {

    const nextSlide = $(".slide-next"); //Переменная, ссылающаяся на кнопку вперед
    const backSlide = $(".slide-back"); //Переменная, ссылающаяся на кнопку назад
    const sliderLine = $(".slider-track"); //Переменная, ссылающаяся div, содержащий элементы слайдера

    const itemCount = $('.slider-item').length; //Количество слайдов
    const itemWidth = $(".slider-item").width(); //Ширина одного слайда
    const generalWidth = itemCount * itemWidth; //Общая ширина всех слайдов

    let offset = 0; //Переменая, отвечающая за смещение по пикселям

    nextSlide.on("click", function() {

        offset += $(".slider-item").width(); //К смещению прибавляется ширина одного слайда

        if (offset > generalWidth - itemWidth) { //Если смещение станет больше, чем (общая ширина слайдов - ширина одного слайда), т.е на последнем слайде
            offset = 0; //то смещение становится нулевым
        }

        sliderLine.css({"right": offset + "px"});  //К слайдер-трэку применяем смещение вправо
    });

    backSlide.on("click", function() {

        offset -= $(".slider-item").width(); //К смещению уменьшается ширина одного слайда

        if (offset < 0) { //Если смещение станет меньше нуля, т.е на первом слайде
            offset = generalWidth - itemWidth; //то смещение становится равно последнему слайду
        }

        sliderLine.css({"right": offset + "px"});  //К слайдер-трэку применяем смещение вправо
        
    });
    

});