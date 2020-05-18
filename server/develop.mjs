import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import config from '../webpack.dev.js';
import api from './api.mjs';


const distPath = path.resolve(process.cwd(),'dist');
const PORT = process.env.PORT || '3000';
const app = express();
const compiler = webpack(config);

// Body Parser Middleware
app.use(express.json());
// Form x-www-urlencoded parser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', api);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
