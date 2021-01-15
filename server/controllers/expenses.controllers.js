const Expense = require("../models/expenses.models");
const argon2 = require("argon2"); //https://github.com/ranisalt/node-argon2/wiki/Options
const jwt = require("jsonwebtoken");
// const validator = require('validator');
const jwt_secret = process.env.JWT_SECRET;
// the client is sending this body object

const add = async (req, res) => {
  const { item, amount, date, category } = req.body;
  const token = req.headers.authorization;
  if (!item || !amount || !date || !category)
    return res.json({ ok: false, message: "All fields are required" });
  try {
    const decoded = jwt.verify(token, jwt_secret);
    const newExpense = {
      item,
      amount,
      date,
      category,
      userId: decoded._id,
    };
    await Expense.create(newExpense);
    res.json({ ok: true, message: "successfully added" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const get = async (req, res) => {

  try {
	const decoded = jwt.verify(token, jwt_secret);
	const found = await Expense.find({userId:decoded._id})
	res.json({ ok: true, message:"successfully found", expenses: found})
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const verify_token = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "something went wrong" })
      : res.json({ ok: true, succ });
  });
};

module.exports = { add, get, verify_token };
