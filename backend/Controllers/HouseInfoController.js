import HouseInfo from "../Schemas/HouseInfo.js"

class HouseInfoController {
    async create(req, res) {
        try {
            const { squareMeter, square, foundationType, floors, bedrooms, type, bathrooms, reservePower, description, pictures, name, views, extraLight, polyMaterial, sectionOfRacks, stepOfRacks, SnowWindLoad, projectAdaptation } = req.body
            const houseInfo = await HouseInfo.create({ squareMeter, square, foundationType, floors, bedrooms, type, bathrooms, reservePower, description, pictures, name, views, extraLight, polyMaterial, sectionOfRacks, stepOfRacks, SnowWindLoad, projectAdaptation })
            res.json(houseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const houseInfos = await HouseInfo.find()
            return res.json(houseInfos)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const houseInfos = await HouseInfo.findById(id)
            return res.json(houseInfos)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const houseInfo = req.body
            if (!houseInfo._id) {
                res.status(400).json({ message: 'HouseInfo не указан' })
            }
            const updatedHouseInfo = await HouseInfo.findByIdAndUpdate(houseInfo._id, houseInfo, { new: true })
            return res.json(updatedHouseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async patch(req, res) {
        try {
            const { id } = req.params
            const houseInfo = req.body
            if (!id) {
                res.status(400).json({ message: 'HouseInfo не указан' })
            }
            const updatedHouseInfo = await HouseInfo.findByIdAndUpdate(id, houseInfo, { new: true })
            return res.json(updatedHouseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const post = await HouseInfo.findByIdAndDelete(id)
            return res.json(houseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteAll(req, res) {
        try {
            const result = await HouseInfo.deleteMany({});
            return res.json(result);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new HouseInfoController()