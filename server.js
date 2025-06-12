const app = require('./app');
const mongoose = require('mongoose');

const { DB_HOST, PORT = 3000 } = process.env;

app.listen(PORT);

// mongoose.set('strictQuery', true);

// mongoose
//    .connect(DB_HOST)
//    .then(() => {
//       console.log('Database connection successful');
//    })
//    .catch((error) => {
//       console.log(error.message);
//       process.exit(1);
//    });
