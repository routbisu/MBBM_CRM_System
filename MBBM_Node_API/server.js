/**
 * Import dependencies
 */
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import database from './database';
import crudAPI from './crud_modules/crudAPI';

/** 
 * Instantiate Express
 */
var app = express();

/**
 * Create Server
 */
app.server = http.createServer(app);

/**
 * Setup CORS
 */
app.use(cors({
	exposedHeaders: ['Link']
}));

/**
 * Setup bodyParser
 */
app.use(bodyParser.json( { limit: '100kb'} ));
app.use(bodyParser.urlencoded( { extended: true } ));

var port = process.env.PORT || 3000;

/**
 * Database connectivity callback
 */
database( _ => {
    /**
     * Setup api module
     */
	app.use('/crudAPI', crudAPI());

    /**
     * Start the server
     */
	app.server.listen(port, function() {
        console.log('MBBM Rest API running at port: ' + port);
    });
});

/**
 * Export the express app
 */
export default app;