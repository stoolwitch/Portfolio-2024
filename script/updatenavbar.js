function navBar() {
    const links = document.querySelectorAll('.navlink');
    const thisLink = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
    const currentID = document.getElementById(thisLink);
    console.log(links, thisLink)
    links.forEach(link => {
        link.classList.remove('activepage');
    });
    currentID.classList.add("activepage");
}