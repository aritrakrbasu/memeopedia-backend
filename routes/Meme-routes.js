const express = require('express');
const {
        addMeme, 
        getAllMeme,
      } = require('../controllers/memeController');

const router = express.Router();

router.post('/memes', addMeme);
router.get('/memes', getAllMeme);


module.exports = {
    routes: router
}