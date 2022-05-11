const imgBtn = document.querySelector('.img-btn')
imgBtn.addEventListener('click', loadImage)

const imgBtn1 = document.querySelector('.img-btn1')
imgBtn1.addEventListener('click', loadImage)

const imgBtn2 = document.querySelector('.img-btn2')
imgBtn2.addEventListener('click', loadImage)

const imgBtn3 = document.querySelector('.img-btn3')
imgBtn3.addEventListener('click', loadImage)

const imgBtn4 = document.querySelector('.img-btn4')
imgBtn4.addEventListener('click', loadImage)

const imgBtn5 = document.querySelector('.img-btn5')
imgBtn5.addEventListener('click', loadImage)

const imgBtn6 = document.querySelector('.img-btn6')
imgBtn6.addEventListener('click', loadImage)

const imgBtn7 = document.querySelector('.img-btn7')
imgBtn7.addEventListener('click', loadImage)

const imgBtn8 = document.querySelector('.img-btn8')
imgBtn8.addEventListener('click', loadImage)

function loadImage(e){
    $('#modalContent').html('');


    var img = OpenSeadragon({
        id: 'modalContent',
        defaultZoomLevel: 1,
        minZoomLevel: 0.7,
        prefixUrl: "../static/js/images/",
        tileSources:{
            type: 'image',
            url: e.target.src,
            Format: 'jpg',
            buildPyramid: false,
        },
    })
}