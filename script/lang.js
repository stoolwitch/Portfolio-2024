function setLang() {
    const userLang = navigator.language.slice(0, 2);
    console.log(userLang);
}

// var language; 
// function getLanguage() {
// (localStorage.getItem('language') == null) ? setLanguage('fr') : false;
// $.ajax({ 
// url:  '/language/' +  localStorage.getItem('language') + '.json', 
// dataType: 'json', async: false, dataType: 'json', 
// success: function (lang) { language = lang } });
// }

// function setLanguage(lang) {
// localStorage.setItem('language', lang);
// }