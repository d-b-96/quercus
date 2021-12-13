var map = L.map('map').setView([51.0983579, 4.1897399], 12);

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
        ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([51.0983579, 4.1897399]).addTo(map);
var popup = marker.bindPopup("<a href='https://www.google.be/maps/place/Quercus:+Professionele+boomverzorging+en+tuinaanneming/@51.0983579,4.1897399,16.13z/data=!4m5!3m4!1s0x47c3ee890a61a1c9:0x3a6badc98e5c61c!8m2!3d51.0983349!4d4.1932887' target='_blank'>Open maps</a>");
