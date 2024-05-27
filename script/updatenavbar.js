function navBar() {
    const links = document.querySelectorAll('.navlink');
    const indexLink = document.getElementById('index');
    const thisLink = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
    const currentID = document.getElementById(thisLink);
    //console.log(links, thisLink)
    links.forEach(link => {
        link.classList.remove('activepage');
    });
    if (thisLink == ""){
        indexLink.classList.add("activepage");
    };
    currentID.classList.add("activepage");
    var activepagename = document.getElementById("activepagename");
    const currentPage = document.title;
    //console.log(activepagename, currentPage)
    activepagename.innerHTML = ">" + currentPage;
}