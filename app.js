import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
TuitController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);