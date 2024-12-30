import express from "express";

const router = express.Router();

import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

import categoryActions from "./modules/category/categoryActions";
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

export default router;
