import express from 'express'

const app = express();

const PORT = 8000;

//make post data available in req.body

app.use(express.json()); //middleware to parse JSON data into object



// console.log(app);

import userRouter from './src/router/userRouter.js';

app.use("/api/v1/users", userRouter)

app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log(`Server is running on port http://localhost:${PORT}`);
});