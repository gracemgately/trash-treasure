//dependencies: 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express')

const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;


const createApp = () => {
    //logging
    app.use(morgan('dev'));

    //parsing
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //sessionware: TBD --> figure out how to integrate Stripe

    //routes
    //TBD --> auth routes?
    app.use('/api', require('./api'));

    // static file-serving middleware
    app.use(express.static(path.join(__dirname, '..', 'public')))

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    })

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err)
        console.error(err.stack)
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })

    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}

if (require.main === module){
    createApp(app)
}