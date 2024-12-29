import Router from "express";
import HouseInfo from "../Controllers/HouseInfoController.js";

const HouseInfoRouter = new Router()

HouseInfoRouter.post('/houseInfo', HouseInfo.create)
HouseInfoRouter.get('/houseInfo', HouseInfo.getAll)
HouseInfoRouter.get('/houseInfo/:id', HouseInfo.getOne)
HouseInfoRouter.put('/houseInfo', HouseInfo.update)
HouseInfoRouter.patch('/houseInfo/:id', HouseInfo.patch)
HouseInfoRouter.delete('/houseInfo/:id', HouseInfo.delete)

export default HouseInfoRouter