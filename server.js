import express from 'express'

const app = express();

const PORT = 8000;

//make post data available in req.body

app.use(express.json()); //middleware to parse JSON data into object

let fakeDB = [{
    id: 1,
    fName: "harwin",
    lname: "kaur"
},
{
    id: 2,
    fName: "harwin",
    lname: "kaur"
}
];

// console.log(app);

import userRouter from './src/router/userRouter.js';

app.use("/api")

app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log(`Server is running on port http://localhost:${PORT}`);
});