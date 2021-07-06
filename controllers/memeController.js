'use strict';

const firebase = require('../db');
const Meme = require('../models/Meme');
const firestore = firebase.firestore();


const addMeme = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('memes').add(data);
        res.send('memes saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllMeme = async (req, res, next) => {
    try {
        const memes = await firestore.collection('memes');
        const data = await memes.get();
        const memesArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const student = new Meme(
                    doc.id,
                    doc.data().postedBy,
                    doc.data().url,
                );
                memesArray.push(student);
            });
            res.send(memesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addMeme,
    getAllMeme
}