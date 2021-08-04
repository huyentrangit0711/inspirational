const WEATHER_KEY="2587301bacada00ff6eee7f20c76d4ec"
export const fetchCurrentWeather = async () => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${WEATHER_KEY}`).then(response => response.json())
}