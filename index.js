require('dotenv').config();
const cors = require('cors');
const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});


const libroRoutes = require('./routes/routes');
app.use('/api', libroRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});