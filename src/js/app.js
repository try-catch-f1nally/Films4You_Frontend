import {isWebp} from "./modules/functions.js";

isWebp();

$(function () {
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        speed: 1000,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 4, slidesToScroll: 4
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 3, slidesToScroll: 3
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 2, slidesToScroll: 2
            }
        }]
    });
});

document.querySelectorAll('.film-tile').forEach(tile =>
    tile.addEventListener('mouseover', evt => {
        evt.currentTarget.classList.add('active');
    }));

document.querySelectorAll('.film-tile').forEach(tile =>
    tile.addEventListener('mouseout', evt => {
        evt.currentTarget.classList.remove('active');
    }));

document.querySelector('.log-in-block').addEventListener('mouseover', evt => {
    evt.currentTarget.classList.add('active');
});

document.querySelector('.log-in-block').addEventListener('mouseout', evt => {
    evt.currentTarget.classList.remove('active');
});
