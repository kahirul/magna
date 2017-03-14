const Osmosis = require('osmosis')

var img = document.getElementById('image')
var buttons = document.getElementsByClassName('fetch')

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    
    button.addEventListener('click', () => {
        fetchPage('http://www.onemanga.com/manga/naruto/388/16')
    })
}

function fetchPage(pageUrl) {
    Osmosis.get(pageUrl).find('img.scan-page').then((context) => {
        img.setAttribute('src', context.getAttribute('src'))
    })
}
