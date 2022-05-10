const imgBtn = document.querySelector('.img-btn')
imgBtn.addEventListener('click', loadImage)

function loadImage(e){
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