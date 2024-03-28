const mongoose = require('mongoose');
const app = require('./app');

const DbConnection = process.env.DATABASE;

mongoose.connect(DbConnection).then(() => {
    console.log('Database Connection Successfull!');
}).catch((err) => {
    console.log(err.message);
    console.log('Database Connection Failed!');
});


const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`);
});