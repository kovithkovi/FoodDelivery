import foodModel from "../Model/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let imageFileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    image: imageFileName,
    category: req.body.category,
    description: req.body.description,
  });
  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();

    res.json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.body.id);
    if (!food)
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    fs.unlinkSync(`uploads/${food.image}`);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { addFood, listFood, removeFood };
