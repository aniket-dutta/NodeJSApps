const debug = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan');
const express = require('express');
const app = express();

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan Enabled...');
}

dbDebugger('Connected to the DB...');

const port = process.env.PORT || 3000;
app.listen(port, () => {`Listening on port ${port}`});

//using debugger, we can filter messages logs while running code
// first set filter in cmd by
//set DEBUG=app:startup //app:filterName // app:* for all logs
//start js file to see logs
//shortcut 
// >>DEBUG=app:* node index.js