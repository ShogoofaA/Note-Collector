const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoutes);
app.use('/', htmlRoutes); 


app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
  });
  