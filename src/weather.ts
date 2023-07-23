const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weather = document.querySelector('#weather span:first-child')
const city = document.querySelector('#weather span:last-child')

function onGeoOK(position: GeolocationPosition) {
  if (!weather || !city) return

  const { latitude: lat, longitude: lon } = position.coords
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.name)
      ;(city as any).innerText = data.name
      ;(
        weather as any
      ).innerText = `${data.weather[0].main} / ${data.main.temp}°C`
    })
}

function onGeoErr() {
  alert("Can't find you. No weather for you.")
}

export default function () {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr)
}
