import Router from "express";
import HouseInfoTop from "../Controllers/HouseInfoTopController.js";

const HouseInfoTopRouter = new Router()

HouseInfoTopRouter.post('/houseInfoTop', HouseInfoTop.create)
HouseInfoTopRouter.get('/houseInfoTop', HouseInfoTop.getAll)
HouseInfoTopRouter.get('/houseInfoTop/:id', HouseInfoTop.getOne)
HouseInfoTopRouter.put('/houseInfoTop', HouseInfoTop.update)
HouseInfoTopRouter.patch('/houseInfoTop/:id', HouseInfoTop.patch)
HouseInfoTopRouter.delete('/houseInfoTop/:id', HouseInfoTop.delete)

export default HouseInfoTopRouter