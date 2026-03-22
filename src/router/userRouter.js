import express from 'express';
const router = express.Router();

let fakeDB = [{
    id: 1,
    fName: "harwingi",
    lname: "kaur"
},
{
    id: 2,  
    fName: "harwin",
    lname: "kaur"
}
];

router.get('/', (req, res) => {

    try{
        // throw new Error("testing error");

        console.log(req.query);
        // fakeDB.push(req.query);

        res.json({
        message: "to do get method",
        users: fakeDB,
    });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json
        ({
            status: "error",
            message: "Error " + error.message,
        });
    }
});

router.put('/', (req, res) => {
    console.log(req.body,req.headers.authorization,"from put");
    res.json({
        message: "to do put method",
    });
});

router.post('/', (req, res) => {
    fakeDB.push(req.body);
    res.json({
        message: "New user added",
    });
});

router.delete('/:id', (req, res) => {
    console.log(req.params, "from delete");
    res.json({
        message: "to do delete method",
    });
});

export default router;