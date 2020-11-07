
require('@babel/register')({
    presets:['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const app = express();
const appRouter = require('./appRouter');

app.use( '/', appRouter );
app.use( express.static('build') );

app.listen(3000, () => {
    console.log('3000 is running');
});