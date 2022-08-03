const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendStatus(200);
// })

const port = 3000;

app.listen(port, (err) => {
    if (err) {
        console.error(new Error(err));
    }
    console.log(`Listening on port ${port}`);
})