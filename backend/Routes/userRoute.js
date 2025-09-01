import { Router } from "express";
import { LoginUser, SignupUser } from "../Controllers/userControllers.js";

let route = Router();

//Login

route.post("/login", LoginUser)

route.post("/signup", SignupUser)

export default route