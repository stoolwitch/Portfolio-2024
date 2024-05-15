function onLoad() {
  includeHTML();
  setTimeout(() => { navBar(); }, 10);
  var activepagename = document.getElementById("activepagename");
  const currentPage = document.title;
  console.log(activepagename, currentPage)
  activepagename.innerHTML = ">" + currentPage;
}