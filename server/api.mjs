import express from 'express';
import multiparty from 'multiparty';
import axios from 'axios';

const router = express.Router();

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg5MjU4NDA3LCJleHAiOjE1OTE4NTA0MDd9.2hQ0TQXI1HT2OktV8zPuBqZ-_VkJAn_IIGFI-XJLVEg";

//Proxy config
const config = {
  baseURL: process.env.DATABASE_URL || 'http://localhost:1337',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN || token}`
  },
};

router.get('/teams', (request, response) => {
  const url = request.url;

  axios.get(url, config)
    .then(res => response.json(res.data))
    .catch(err => response.status(err.response.status).json(err.response.data));
 });

router.post('/email-send', (request, response) => {
  const url = request.url;

  //Accepts multipart/form-data content
  const form = new multiparty.Form();

  //Parse multipart/form-data
  form.parse(request, (err, fields) => {
    //Error on callback
    if(err) console.error('/server/routes form.parse(err) ', err);

    axios.post(url, fields, config)
      .then(res => response.json(res.data))
      .catch(err => response.status(err.response.status).json(err.response.data));
  });

  //Error when parsing
  form.on('error', (err) => console.error('/server/routes form.on(error) ', err.stack));
});

export default router;
