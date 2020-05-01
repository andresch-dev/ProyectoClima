const axios = require('axios');

const getClima = async(lat, lon) => {

    // const instance = axios.create({
    //     baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`
    // });

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=52c6e6f83e0c19a18c5252fb8cbd1e41`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}