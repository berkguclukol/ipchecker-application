function getIPInfo() {
    fetch("https://freeipapi.com/api/json", {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            document.getElementById("ipAddress").innerHTML = data.ipAddress;
            document.getElementById("latitude").value = data.latitude;
            document.getElementById("longitude").value = data.longitude;
            document.getElementById("countryName").value = data.countryName;
            document.getElementById("timeZone").value = data.timeZone;
            document.getElementById("zipCode").value = data.zipCode;
            document.getElementById("cityName").value = data.cityName;
            document.getElementById("regionName").value = data.regionName;
            document.getElementById("countryCode").value = data.countryCode;
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            document.getElementById("lastUpdate").innerHTML = "<small>Last Update : " + today.toLocaleString() + "</small>";

        })
        .catch(error => console.log('error', error));
}


