const apiKey = '4c35fd3a09d4af956d5317a6b01073fc';


const getWeather = async (city) => {
    return await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then ((json) => {
        return json;
    })
}

export default getWeather;