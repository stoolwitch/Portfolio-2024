// var x = 1;

function highlightsize(){
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