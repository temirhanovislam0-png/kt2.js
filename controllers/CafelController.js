import fileService from "../middleware/fileService.js";
import Cafel from "../models/Cafel.js"

class CafelController {
    async getCafels(req,res){
        try{
            const cafels = await Cafel.find();
            res.status(200).json(cafels)
        }catch (err){
            res.status(404).json("Ошибка при получении кафелей! : " + err);
        }
    }

    async getCafelOne(req,res){
        try{
            const{ id } = req.params;
            const cafel = await Cafel.findById(id);
            if (!cafel) {
              return res.status(404).json("Такого кафеля не существует!"); // ✅ Добавьте return
          }
            res.status(200).json(cafel);
        }catch (err){
            res.status(500).json("Ошибка при выполнении запроса: " + err);
        }
    }

    async addcafel(req, res) {
        try {
          let fileName = null;
    
          if (req.files && req.files.image) {
            fileName = await fileService.saveFile(req.files.image);
          }
    
          const { name, price, size , producer} = req.body;
    
          const newCafel = await Cafel.create({name, price, size , producer, image: fileName });
    
          res.status(200).json(newCafel);

        } catch (err) {
          res.status(500).json("Ошибка при покупке: " + err);
          console.log("Ошибка при покупке!" + err);
        }
    }


    async updateCafel(req, res) {
        try {
          const { id } = req.params;
          const { name, price, size , producer } = req.body;
          const updateCafel = await Cafel.findByIdAndUpdate(
            id,
            {
                name,
                price,
                size ,
                producer
            },
            { new: true },
          );
          if (!updateCafel) {
            return res.status(404).json("Такого кафеля не существует!"); // ✅ Добавьте return
        }
          res.status(200).json(updateCafel);
        } catch (err) {
          res.status(500).json("Ошибка при обновлении кафеля: " + err);
        }
      }


      async deleteCafel(req, res) {
        try {
          const { id } = req.params;
          const cafel = await Cafel.findByIdAndDelete(id);
          if (!cafel) {
            return res.status(404).json("Такого кафеля не существует!"); // ✅ Добавьте return
        }
          res.status(200).json("Кафель успешно удален!");
        } catch (err) {
          res.status(500).json("Ошибка при выполнении запроса: " + err);
        }
      }

}

export default new CafelController();