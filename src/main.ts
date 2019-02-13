const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, resp) => {
    resp.send('It Works (TS version)');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
