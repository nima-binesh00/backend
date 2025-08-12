const { decrypt } = require("dotenv");
const { Users } = require("../model/Data.model");
const { Databd } = require("../model/Data.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Adduser = async (req, res) => {
  try {
    console.log("okkkkkkkkkkkkkkkkkkkkkkkkk");

    const { username, password, email } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const newuser = await Users.create({ username, email, password: hash });
    res.status(201).json(newuser);
  } catch (error) {
    console.log("noooooooooooooooooooooooooo");

    res.status(500).json({ msg: error.message });
  }
};
const getAllusers = async (req, res) => {
  try {
    const data = await Users.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const chengeUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { username, password, email } = req.body;

    const updateData = { username, email };

    if (password) {
      const hash = await bcrypt.hash(password, 12);
      updateData.password = hash;
    }

    const item = await Users.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deletebyid = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Users.findByIdAndDelete(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const finditemuser = async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Databd.find({ userId: id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const useremail = await Users.findOne({ email: email });
    if (!useremail) {
      return res.status(404).json({
        error: "Authentication failed. email or password incorrect",
      });
    }
    const userpassword = await bcrypt.compare(password, useremail.password);
    if (!userpassword) {
      return res.status(404).json({
        error: "Authentication failed. email or password incorrect",
      });
    }
    const token = jwt.sign({ userId: useremail._id }, process.env.SECRET_KEY);
    console.log(token);
    return res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  Adduser,
  getAllusers,
  chengeUser,
  deletebyid,
  Login,
  finditemuser,
};
