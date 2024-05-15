function randomSorting() {
    'use strict';
    // the row has ID="shuffle"
    const shuffled = document.querySelector('#playgroundProjects'),
        // the columns has class="random"
        myShuffle = document.querySelectorAll('.pg-project'),
        length = myShuffle.length;
    myShuffle.forEach(() => {
        let target = Math.floor(Math.random() * length - 1) + 1;
        let target2 = Math.floor(Math.random() * length - 1) + 1;
        shuffled.insertBefore(myShuffle[target], myShuffle[target2]);
    })
}