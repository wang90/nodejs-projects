


import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import Document from './Document';


const router = express.Router();

const appString = ReactDOMServer.renderToString(<App/>);
const html = ReactDOMServer.renderToStaticMarkup(<Document>{appString}</Document>)


router.get('/', ( req, res ) => {
    res.status(200);
    res.send(html);
});

module.exports = router
