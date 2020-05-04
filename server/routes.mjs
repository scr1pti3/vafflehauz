import express from 'express';
import path from 'path';
import fs from 'fs';

const mastheadBackgroundPath = path.resolve(process.cwd(), 'server/asset/mastheadBackground.jpg');

const thumbnail = fs.readFileSync(mastheadBackgroundPath, 'base64');

const router = express.Router();    

router.get('/', (req,res) => {
    res.status(200).send({
        name: "Fallen Leaf",
        type: "Website Design",
        intro: "Our current landing page for vafflehauz",
        description: `This page represent our company abilities and the technologies we used. This page is created by using the MERN Stack and made by Muhammad Raznan, one of our company founder and lead developer.`,
        thumbnail: `data:image/jpg;base64, ${thumbnail}`,
    });
});

router.get('')

export default router;
