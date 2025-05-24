import { Router } from "express";

const router = Router();

router.get("/test1", (req, res) => {
    const name = req.query.name;
    res.send(`Hello this is from the /test path. Your name is ${name}`);
});

router.get("/test2/:param2", (req, res) => {
    const testParam = req.params.param2;
    res.send(`You've accessed resource via path param ${testParam}`);
});


router.post("/test3", (req, res) => {
    console.log("this is the data from the client:", req.body) //accessing the data made by client
    res.sendStatus(201);
})

export default router;