function get_wheather() {
    const python = require("python-shell")
    const path = require("path")
    
    const city = document.getElementById("city").value
    document.getElementById("city").value = ""

    const options = {
        scriptPath: path.join(__dirname, '/../engine'),
        args: [city]
    }

    const weather = new python('weather_engine.py', options)
    weather.on('message', function (message) {
        swal(message)
    })
}