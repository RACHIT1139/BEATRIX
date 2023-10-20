window.addEventListener('load',()=> {
   let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
            lat= position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eccbee1e29f540ed69feeb7a0642c9c9
&units=metric`;
            
        });
    }
});