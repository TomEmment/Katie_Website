
function loadImage(){

    var img = OpenSeadragon({
        id: 'modalContent',
        defaultZoomLevel: 1,
        minZoomLevel: 0.7,
        prefixUrl: "../static/js/images/",
        titleSources:{
            type: 'image',
            url: '../static/img/gallery_secondary9.jpg',
            Format: 'jpg',
            buildPyramid: false,
        },
    })


}