import * as flsFunctions from "./modules/functions.js";
import "./modules/slick.js";

flsFunctions.isWebp();

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }   
    }
}
ibg();


let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let rightside_menu = document.querySelector('.rightside-menu');
let rightside_menu__close = document.querySelector('.rightside-menu__close');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
    rightside_menu.classList.toggle('active');
}

rightside_menu__close.onclick = function(){
    header__burger.classList.remove('active');
    rightside_menu.classList.remove('active');
    menu.classList.remove('active');
}

$(function (){
    if($(window).width() <= 830){
        $('.footer__social').on('click', function() {
            $('.footer__social').toggleClass('active');
            $('.footer__social-list').slideToggle(300);
        });
    
        $('.footer__links').on('click',function() {
            $('.footer__links').toggleClass('active');
            $('.footer__links-list').slideToggle(300);
        });
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.gallery__tabs-btn').on('click',function() {
        var i = $(this).data('filter');
        if (i == 'all'){
            $('.gallery__images-item').show(300, "linear");
        } 
        else{
            $('.gallery__images-item').hide();
            $('.gallery__images-item.gallery_'+i).show(300, "linear");
        }
        $('.gallery__tabs-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 7
                }
            },
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
            },
            {
                breakpoint: 660,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            }
        ]    
    });

    $('.slider-blog').slick({
        prevArrow: '<button type="button" class="slider-blog__arrow slider-blog__arrowleft"><img src="img/blog/back.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slider-blog__arrow slider-blog__arrowright"><img src="img/blog/next.svg" alt="arrow right"></button>'
    });

    if($(window).width() <= 1000){
        $('.sidebar__categories-title').on('click',function() {
            $(this).toggleClass('active');
            $('.sidebar__categories-list').slideToggle(300);
        });
    
        $('.sidebar__posts-title').on('click',function() {
            $(this).toggleClass('active');
            $('.sidebar__posts-list').slideToggle(300);
        });

        $('.sidebar__tags-title').on('click',function() {
            $(this).toggleClass('active');
            $('.sidebar__tags-item').slideToggle({
                duration: 300,
                start: function() {
                    jQuery(this).css('display','flex');
                }
            });
        });
    }
    
    if($(window).width() <= 980){
        $('.blog-ar').on('click',function() {
            $('.sidebar').toggleClass('active');  
        });
    }

    $('.slider-blog-single').slick({
        prevArrow: '<button type="button" class="slider-blog-single__arrow slider-blog-single__arrowleft"><img src="img/blog/single/prev.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slider-blog-single__arrow slider-blog-single__arrowright"><img src="img/blog/single/next.svg" alt="arrow right"></button>'
    });
})