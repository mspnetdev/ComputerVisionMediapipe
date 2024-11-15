const express = require('express');
const path = require('path');
const app = express();

// Serve file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
