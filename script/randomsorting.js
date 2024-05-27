function randomSorting() {
    const shuffled = document.querySelector('#playgroundProjects'),
        myShuffle = document.querySelectorAll('.pg-project'),
        length = myShuffle.length;
    myShuffle.forEach(() => {
        let target = Math.floor(Math.random() * length - 1) + 1;
        let target2 = Math.floor(Math.random() * length - 1) + 1;
        shuffled.insertBefore(myShuffle[target], myShuffle[target2]);
    })
}