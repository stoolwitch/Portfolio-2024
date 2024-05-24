const highImages = document.querySelectorAll('.project-gallery');
highImages.forEach(image => {
    var imageheight = image.clientHeight;
    var halfheight = imageheight / 1.9;
    image.style.height = halfheight + "px";
});