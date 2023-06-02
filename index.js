
function getIPInfo() {
    const data = JSON.parse('{"ipVersion": 4,"ipAddress": "176.40.179.157","latitude": 41.01384,"longitude": 28.949659,"countryName": "Turkey","countryCode": "TR","timeZone": "+03:00","zipCode": "34080","cityName": "Istanbul","regionName": "Istanbul"}');
    document.getElementById("response").innerHTML = data.ipAddress;






    /*
    fetch("https://freeipapi.com/api/json", {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            document.getElementById("response").innerHTML = data.ipAddress;
        })
        .catch(error => console.log('error', error));
     */
}


