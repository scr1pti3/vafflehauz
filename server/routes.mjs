import express from 'express';
import multiparty from 'multiparty';
import axios from 'axios';

const router = express.Router();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg5MjU4NDA3LCJleHAiOjE1OTE4NTA0MDd9.2hQ0TQXI1HT2OktV8zPuBqZ-_VkJAn_IIGFI-XJLVEg";

//Proxy config
const config = {
  baseURL: process.env.DATABASE_URL || 'http://localhost:1337',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN || token}`
  },
};

router.get('/teams', (request, response) => {
  axios.get('/teams', config)
    .then(res => response.json(res.data))
    .catch(err => console.error("/server/routes /teams " + err));
 });

router.post('/email-send', (request, response) => {
  //Accepts multipart/form-data content
  const form = new multiparty.Form();

  //Parse multipart/form-data
  form.parse(request, (err, fields) => {
    //Error on callback
    if(err) console.error('/server/routes form.parse(err) ', err);

    axios.post('/email-send', fields, config)
      .then(res => response.json(res.data))
      .catch(err => console.error('/server/routes email-send ', err));
  });

  //Error when parsing
  form.on('error', (err) => console.error('/server/routes form.on(error) ', err.stack));
});

export default router;
