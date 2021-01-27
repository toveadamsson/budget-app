const Expense = require("../models/expenses.models");
const argon2 = require("argon2"); //https://github.com/ranisalt/node-argon2/wiki/Options
const jwt = require("jsonwebtoken");
// const validator = require('validator');
const jwt_secret = process.env.JWT_SECRET;
// the client is sending this body object
//?=========================ADD=========================================
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
//?========================GET==========================================
const get = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwt_secret);
    const found = await Expense.find({ userId: decoded._id });
    res.json({ ok: true, message: "successfully found", expenses: found });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};
//?===================REMOVE============================================
const remove = async (req, res) => {
  const token = req.headers.authorization;
  const _id = req.params._id;
  try {
    //! fix next 2 lines
    // const decoded = jwt.vertify(token, jtw_secret);
    // if(!decoded)return res.json({ ok: false, message: "invalid token"});
    // const found = await Expense.find({ userId: decoded._id });
    const removed = await Expense.deleteOne({ _id }); // ?????
    res.json({ ok: true, message: "successfully found", expense: removed });
    // res.send({removed});
  } catch (error) {
    console.log("error ==>", error);
    res.json({ ok: false, error });
  }
};
//?===================UPDATE===============================================
const edit = async (req, res) => {
  let { newExpense, updateExpense } = req.headers.authorization;
  try {
    const updated = await Expense.updateOne(
      { newExpense },
      { newExpense: updateExpense }
    );
    res.send({ updated });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

//?=============VERTIFY TOKEN==========================================
const verify_token = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "something went wrong" })
      : res.json({ ok: true, succ });
  });
};
module.exports = { add, get, remove, edit, verify_token };
