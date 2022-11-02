
if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const Search = require('../dist/js/search-server');
const SearchTemplate = fs.readFileSync(path.join(__dirname, '../dist/pages/search.html'), 'utf-8');
const Home = require('../dist/js/home-server');
const HomeTemplate = fs.readFileSync(path.join(__dirname, '../dist/pages/home.html'), 'utf-8');
const data = require('./data.json');

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(Search), SearchTemplate);
        res.status(200).send(html);
    });

    app.get('/home', (req, res) => {
        const html = renderMarkup(renderToString(Home), HomeTemplate);
        res.status(200).send(html);
    });
    app.listen(port, () => {
        console.log('Server is running on port:' + port);
    });
};

server(process.env.PORT || 3000);

const renderMarkup = (str, template) => {
    const dataStr = JSON.stringify(data);
    return template
        .replace('<!--HTML_PLACEHOLDER-->', str)
        .replace('<!--REACT_PLACEHOLDER-->', '<script type="text/javascript" src="https://11.url.cn/now/lib/16.2.0/react.min.js"></script>')
        .replace('<!--REACT_DOM_PLACEHOLDER-->','<script type="text/javascript" src="https://11.url.cn/now/lib/16.2.0/react-dom.min.js"></script>')
        .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`);
}