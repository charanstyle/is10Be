import express from 'express';
import 'dotenv/config';
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`app is listeing on the port ${process.env.PORT}`);
});
