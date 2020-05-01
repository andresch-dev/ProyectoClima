const argv = require('./config/yargs').argv;

const axios = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log(argv.direccion);


const getInfo = async(direccion) => {

    try {
        const resp = await axios.getLatLon(direccion);
        const respc = await clima.getClima(resp.lat, resp.lon)
        return `El clima es ${respc}`;
    } catch (error) {
        return `No se encontro el Clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);