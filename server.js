const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const upload = multer();
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//const { toBrailleImg, bufferToPath } = require('./drawing.js');

const sqlite = require('better-sqlite3');
const db = sqlite('res/db/papeDb.db');
db.pragma('journal_mode = WAL');



// Render index.HTML file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'res/index.html'));
});


// Endpoint for uploading an image and inserting it into the database
app.post('/img', upload.single('imageData'), (req, res) => {
    const { buffer, originalname } = req.file;
    const uploadNickname = req.body.uploadNickname;
    const dateTime = new Date().toISOString();

    const userstmt = db.prepare(`INSERT INTO Users (userAgent, ip) values ('${req.ip}', '${req.user_agent}')`).run();
    const userId = db.prepare(`SELECT last_insert_rowid() as 'lastID' `).all()[0].lastID; //get logId from another query
    console.log(userId)

    const stmt = db.prepare('INSERT INTO Images (imageData, uploadNickname, userId, dateTime) VALUES (?, ?, ?, ?)');
    stmt.run(buffer, uploadNickname, userId, dateTime);

    res.status(200).send('Image uploaded and inserted into database');
});




// Endpoint for retrieving the first image
app.get('/img', (req, res) => {
    const row = db.prepare('SELECT imageData, uploadNickname, userId, dateTime FROM Images ORDER BY id DESC LIMIT 1').get();

    if (row) {
        const imageData = row.imageData;
        const uploadNickname = row.uploadNickname;
        const userId = row.userId;
        const dateTime = row.dateTime;

        res.set('Content-Type', 'image/jpeg');
        res.set('Content-Disposition', `attachment; filename=image_${userId}_${dateTime}.jpg`);
        res.send(imageData);
    } else {
        res.status(404).send('No images found');
    }
});



/*
// POST /submit endpoint - image submission
app.post('/submit', upload.single('imageData'), async function(req, res) {
    try {
        //image data:
        const imageData = req.file.buffer;
        const title = sanitizeForSQL(req.body.title);
        console.log(bufferToPath(imageData))
        const imageBraille = await toBrailleImg(bufferToPath(imageData), 250)
        console.log("\nBRAILLE IMAGE: \n" + imageBraille.slice(0, 1800) + "\n")

        const imageBrailleCompressed = compressStringToString64(imageBraille)
        console.log(`\nBRAILLE IMAGE compressed (${typeof (imageBrailleCompressed)}): \n` + imageBrailleCompressed.slice(0, 250) + "\n")
        console.log(imageBrailleCompressed)

        //for logs:
        const ip = req.ip;
        const userAgent = req.headers['user-agent'];

        // log insertion:
        const logInsertSmtp = db.prepare(`INSERT INTO log (ip_address, user_agent) ` +
            `VALUES ('${ip}', '${userAgent}')`).run();
        const logId = db.prepare(`SELECT last_insert_rowid() as 'lastID' `).all()[0].lastID; //get logId from another query
        console.log(`Inserted log row with ID: ${JSON.stringify(logId)}`);

        // image insertion:

        const imageInsertSmtp = db.prepare(`INSERT INTO images (imageData, log_id, title) ` +
            `VALUES ('${imageBrailleCompressed}', ${logId}, '${title}')`).run();
        const imageId = db.prepare(`SELECT last_insert_rowid() as 'lastID' `).all()[0].lastID; //get logId from another query

        console.log(`Inserted image row with ID: ${imageId}`);

        // Return success response
        res.status(200).json({ success: true, message: "Image submitted successfully! \n" + `   data: ${imageBraille.slice(0, 22)}\n   inserttitle: ${title}` });
    } catch (error) {
        // Return error response
        res.status(500).json({ success: false, message: "Failed to submit image: \n  " + error.message });
    }
});

// POST /moderate endpoint
app.post('/moderate', function(req, res) {
    // Code to handle image moderation
    // Retrieve an unapproved image from the database
    // Present the image to the submitter for moderation
    // Record the moderation action in the database
    // Mark the image as approved or denied
    // Return a response indicating the success or failure of the moderation
});
*/



app.listen(port, () => {
    console.log(`Server running on port ${port}`);



});
