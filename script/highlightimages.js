// var x = 1;

function highlightsize(){
    var generique = document.getElementById('generiqueBox');
    var genWidth = generique.clientWidth;
    var genHeight = genWidth * 0.5625;
    console.log(genHeight);
    generique.style.height = genHeight + "px";
    const highImages = document.querySelectorAll('.project-gallery');
    highImages.forEach(image => {
        image.style.height = "fit-content";
        var imageheight = image.clientHeight;
        var halfheight = imageheight / 1.96;
        // var txt = x += 1;
        // console.log("txt=" + txt);
        image.style.height = halfheight + "px";
    });
}