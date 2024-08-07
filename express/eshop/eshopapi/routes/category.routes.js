
import express from "express";
import { getCategory , getCategoryList , save , saveInBulk } from "../controller/category.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("save-in-bulk",saveInBulk);
router.post("/save",
       body("slug","Slug Is required").notEmpty,
       body("name","Name IS Required").notEmpty,
       body("url").notEmpty,save);

router.get("/list",getCategoryList);
router.get("/:id",getCategory);
export default router;
