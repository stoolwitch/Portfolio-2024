function masonry() {
    var midsize = window.matchMedia("(min-width: 1025px)");
    var bigsize = window.matchMedia("(min-width: 2000px)");
    var masonryBox = document.getElementById('playgroundProjects');
    console.log("masonryupdate");
    masonryBox.style.height = "fit-content";
    var masonryHeight = masonryBox.clientHeight;
    var halfMasonry = masonryHeight/1.8;
    var thirdMasonry = masonryHeight/2.7;
    var quarterMasonry = masonryHeight/3.4;
    if (bigsize.matches){
        console.log("quarter");
        masonryBox.style.height = quarterMasonry + "px";
    } else if (midsize.matches) { // If media query matches
        console.log("third");
        masonryBox.style.height = thirdMasonry + "px";
    } else {
        console.log("half");
        masonryBox.style.height = halfMasonry + "px";
    }
    
}