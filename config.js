'use strict';

const assert = require('assert');

const PORT = process.env.PORT || 3000
const HOST="localhost"
const HOST_URL="http://localhost:8080"
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyCMyvMqZciiXG36qDNIjFkVdIaCqw6wjiM",
        authDomain: "memeopedia-v1.firebaseapp.com",
        projectId: "memeopedia-v1",
        storageBucket: "memeopedia-v1.appspot.com",
        messagingSenderId: "482058711885",
        appId: "1:482058711885:web:b54b293e69652f409bfd04",
        measurementId: "G-978P8B8K89"
    }
}