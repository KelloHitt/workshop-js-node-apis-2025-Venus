import express from "express";
import cors from "cors";
import morgan from "morgan";
import testRouter from "./routes/testRoutes.js";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// TODO Create the Express server
const app = express();

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)
app.use(express.json()); // Activates JSON parsing automatically parses application/json request bodies and makes the data available in req.body 
app.use(cors()); // uses cors middleware package,  any frontend on any domain can access your API
app.use('/assets', express.static("public")); // Alows the client to access any resource under public folder as long as they include the /assets path e.g. http://localhost:3000/assets/cute-cat.jpeg
app.use(morgan("dev")); // Logging info with morgan middleware


// TODO Your application routes here 
app.get("/", (req, res) => {
    res.json({ message: "Hello World!" })
});

app.use("/routes", testRouter);


// TODO Start the server
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT", PORT)
});



/* Notes to Self 

Video TimeStamp -  02:20:00

http://localhost:3000/api/people?firstName=Ash&lastName=Ketchum this is a query string (query paramater) due to ? so to access it 
you would do req.query.firstName and the path in the get method is "/api/people""

http://localhost:3000/api/people/4 this is a path paramter due to ":id" so in the get method the path would be
"/api/people/:id" and to access it you code req.params.id; 

`Your name is ${name}` - this is a tilde for string interpolation so in the ${} you can put any data type which converts it to a string

return a json object e.g. return res.json({message: "Hello"}); the object will be converted to a JSON string (using JSON.stringify()) behind the scenes
and sent to response body

Sending back a status code e.g. return res.sendStatus(404);

Sending JSON and status code e.g. return res.status.(201).json(newPerson);

app.use(express.json()); // Middleware which automatically parses application/json request bodies and makes the data available in req.body as  a Javascript object
use means everything i.e GET, POST, PUT and DELETE

;*/