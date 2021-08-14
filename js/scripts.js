function initMap() {
    const uluru = {lat: 21.0326476, lng: 105.7723577};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}