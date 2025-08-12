const { Directory } = require("../model/Data.model");
const Add = async (req, res) => {
  try {
    const data = await Directory.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getdata = async (req, res) => {
  try {
    const data = await Directory.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const chengedata = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Directory.findByIdAndUpdate(id, req.body, {
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
    const item = await Directory.findByIdAndDelete(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = { Add, getdata, chengedata, deletebyid };
