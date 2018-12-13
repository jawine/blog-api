/*** blog-api/app.js
    code in this file is related to the app's runtime configuration, starting the server, booting the app, and mounting app-wide middlewares.
    Handle database connections. Database models and auth config can be imported. There can also be code related to error handling and specifying the verbosity of logging, 
    based on current env (i.e full stack traces for development, not production) 
***/

const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')


// const https = require('https')
// TODO: use https in production, http in devel
// to use https we need to create our own https server instance
// express().listen() will only use http
const app = express()
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

// set body-parser options
app.use(bodyParser.json())

// enable and configure CORS
// by default, Access-Control-Allow-Origin will be set to * wildcard,
// allowing all domains
app.use(cors({
    origin: '*', // default setting, could whitelist specific domains if desired
    methods: ['GET', 'PUT', 'POST', 'DELETE'] // not currently using HEAD or PATCH
}))

app.listen(port, host, () => {
    console.log(`server started at ${ host }:${ port }\n`)
})