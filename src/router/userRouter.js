import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    
    // fakeDB.push(req.query);
    res.json({
        message: "to do get method",
        users: fakeDB,
    });
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