import express from 'express';
import multiparty from 'multiparty';
import axios from 'axios';

const router = express.Router();

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg5MjU4NDA3LCJleHAiOjE1OTE4NTA0MDd9.2hQ0TQXI1HT2OktV8zPuBqZ-_VkJAn_IIGFI-XJLVEg";

//Proxy config
const config = {
  baseURL: process.env.DATABASE_URL || 'http://localhost:1337',
};

router.get('/teams', (request, response) => {
  axios.get(request.url, config)
    .then(res => response.json(res.data))
    .catch(err => response.status(err.response.status).json(err.response.data));
 });

router.get('/uploads/:file', (request, response) => {
  axios.get(request.url, {
    ...config,
    responseType: 'stream'
  })
    .then(res => {
      //Use the backend response header for our proxy response header
      response.set(res.headers);
      response.set('x-powered-by', 'Express');

      //Send the file as a stream
      res.data.pipe(response);
    })
    .catch(err => console.log('error'));
 });

router.post('/email-send', (request, response) => {
  //Accepts multipart/form-data content
  const form = new multiparty.Form();

  //Parse multipart/form-data
  form.parse(request, (err, fields) => {
    //Error on callback
    if(err) console.error('/server/routes form.parse(err) ', err);

    axios.post(request.url, fields, config)
      .then(res => response.json(res.data))
      .catch(err => response.status(err.response.status).json(err.response.data));
  });

  //Error when parsing
  form.on('error', (err) => console.error('/server/routes form.on(error) ', err.stack));
});

export default router;
