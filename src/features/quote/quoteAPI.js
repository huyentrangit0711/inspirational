const WEATHER_KEY='https://api.quotable.io/random'
export const fetchQuotes = async () => {
    return await fetch(WEATHER_KEY).then(response => response.json())
}