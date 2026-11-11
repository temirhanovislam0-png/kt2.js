import { Router } from "express";
import CafelController from "../controllers/CafelController.js";


const router = new Router();
router.get("/cafels" , CafelController.getCafels);
router.get("/cafel/:id",CafelController.getCafelOne);
router.post("/addcafel" , CafelController.addcafel);
router.patch("/cafel/:id",CafelController.updateCafel);
router.delete("/cafel/:id" , CafelController.deleteCafel)


export default router;



