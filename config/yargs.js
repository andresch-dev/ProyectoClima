const direccion = {
    alias: 'd',
    desc: 'Clima de la Ciudad',
    demand: true

}
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Clima de una Ciudad',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};