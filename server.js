const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://chasepalmer1:Chalmer619@ccbfishing.0rfh64f.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen('3000', () => {
    console.log('Server started.');
});

