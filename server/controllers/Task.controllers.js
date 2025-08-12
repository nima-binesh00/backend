const { Databd } = require("../model/Data.model");
const Add = async (req, res) => {
  try {
    const data = await Databd.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getdata = async (req, res) => {
  try {
    const data = await Databd.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const chengedata = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Databd.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deletebyid = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Databd.findByIdAndDelete(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const finditem = async (req, res) => {
  const { dirId } = req.params;

  try {
    const tasks = await Databd.find({ dirId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = { Add, getdata, deletebyid, chengedata, finditem };
