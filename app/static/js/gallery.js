
function loadImage(){

    var img = OpenSeadragon({
        id: 'modalContent',
        titleSources:{
            type: 'image',
            prefixUrl: '../static/js/images/',
            url: 'static/img/gallery_secondary9.jpg',
            Format: 'jpg',
            buildPyramid: false,
        },
    })
}