AOS.init();

$('.menu-btn').click(function () {
    $('.mobile-nav').addClass('active');
})
$('.menu-close').click(function () {
    $('.mobile-nav').removeClass('active');
})

if ($('.play-btn').length) {

    // $('.play-btn').each(function(){
    //     $('.play-btn').data('src')
    // })

    $('.play-btn').click(function () {
        var playBtn = $(this);
        var wrap = playBtn.parent();
        var src = playBtn.data('src');
        var temp = `<video src="${src}" playinline autoplay muted controls="true"></video>`;
        wrap.append(temp);
        // console.log("cddcd", capture(wrap.find('video')[0]));

        var snapshot = function() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            ctx.drawImage(wrap.find('video')[0], 0, 0, canvas.width, canvas.height);
            console.log("bhbh", canvas.toDataURL('image/png'));
            wrap.find('video')[0].removeEventListener('canplay', snapshot);
        };
        wrap.find('video')[0].addEventListener('canplay', snapshot);

        wrap.find('img').fadeOut('slow', function () {
            wrap.find('img').remove()
        });
        wrap.find('button').fadeOut('slow', function () {
            wrap.find('button').remove()
        });
        stopOtherVideo()
    })
}

function stopOtherVideo() {
    $('.cook-swiper video').each(function (e) {
        var currentVid = $(this);
        $(this).on('play', function () {
            $('.cook-swiper video').each(function (e) {
                if ($(this).attr('src') != currentVid.attr('src')) {
                    $(this)[0].pause();
                }
            });
        })
    })
}


// function capture(vid) {
//     var canvas = document.getElementById('canvas');     
//     var video = vid;
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
//     const playImage = new Image();
//     playImage.src = 'path to image asset';
//     playImage.onload = () => {
//       const startX = (video.videoWidth / 2) - (playImage.width / 2);
//       const startY = (video.videoHeight / 2) - (playImage.height / 2);
//       canvas.getContext('2d').drawImage(playImage, startX, startY, playImage.width, playImage.height);
//       canvas.toBlob() = (blob) => {
//         const img = new Image();
//         img.src = window.URL.createObjectUrl(blob);
//         console.log("image", img);
//       };
//     };

// }

var swiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".sc-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // loop: true,
    
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".ft-pr-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".ft-next",
        prevEl: ".ft-prev",
    }
 
});

var swiper = new Swiper(".pr-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },

});

var swiper = new Swiper(".insta-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".in-next",
        prevEl: ".in-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".team-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".in-next",
        prevEl: ".in-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // navigation: {
    //     nextEl: ".in-next",
    //     prevEl: ".in-prev",
    // },
    pagination: {
        el: ".product-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// counter

$('.counter-wrapper').each(function(){
    var inc = $(this).find('.increment');
    var dec = $(this).find('.decrement');
    var inp = $(this).find('input');
    var vl = parseInt(inp.val());
    var max = 5;

    inc.click(function(){
        if(vl < max){
            vl = vl+1;
            inp.val(vl)
        }
    });

    dec.click(function(){
        if(vl > 1){
            vl = vl-1;
            inp.val(vl)
        }
    });

})