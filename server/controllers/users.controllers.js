const User = require('../models/users.models');
const argon2 = require('argon2'); //https://github.com/ranisalt/node-argon2/wiki/Options
const jwt = require('jsonwebtoken');
const validator = require('validator');
const jwt_secret = process.env.JWT_SECRET;
const Expenses = require('../models/expenses.models')
// the client is sending this body object
//  {
//     email: form.email,
//     password: form.password,
//     password2: form.password2
//  }
const register = async (req, res) => {
	const { name,email, password, password2, income } = req.body;
	if (!name || !email || !password || !password2 || !income ) return res.json({ ok: false, message: 'All fields are required' });
	if (password !== password2) return res.json({ ok: false, message: 'passwords must match' });
	if (!validator.isEmail(email)) return res.json({ ok: false, message: 'please provide a valid email' });
	try {
		const user = await User.findOne({ email });
		if (user) return res.json({ ok: false, message: 'email already in use' });
		// 1234
		// osiduv0w8hv08jew0vheohv
		const hash = await argon2.hash(password);
		// console.log('hash ==>', hash);
		const newUser = {
			name,
			email,
			password: hash,
			income,
		};
		await User.create(newUser);
		res.json({ ok: true, message: 'successfully registered' });
	} catch (error) {
		console.log(error)
		res.json({ ok: false, error });
	}
};
// the client is sending this body object
//  {
//     email: form.email,
//     password: form.password
//  }
const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) return res.json({ ok: false, message: 'All field are required' });
	if (!validator.isEmail(email)) return res.json({ ok: false, message: 'invalid data provided' });
	try {
		const user = await User.findOne({ email });
		if (!user) return res.json({ ok: false, message: 'invalid data provided' });
		const match = await argon2.verify(user.password, password);
		if (match) {
			const token = jwt.sign(user.toJSON(), jwt_secret, { expiresIn: '30d' }); //{expiresIn:'365d'}
			res.json({ ok: true, message: 'welcome back', token, email });
		} else return res.json({ ok: false, message: 'invalid data provided' });
	} catch (error) {
		res.json({ ok: false, error });
	}
};

const deleteaccount = async (req,res) => {
	const token = req.headers.authorization;
	try{
		const decoded = jwt.verify(token, jwt_secret);
		console.log('decoded', decoded._id)
		await User.deleteOne({ _id:decoded._id})
		await Expenses.deleteMany({userId:decoded._id})
		res.json({ ok: true, message: 'Adios'});
	}catch(error){
		res.json({ ok: false, error });
	}
}

const verify_token = (req, res) => {
	console.log(req.headers.authorization);
	const token = req.headers.authorization;
	jwt.verify(token, jwt_secret, (err, succ) => {
		err ? res.json({ ok: false, message: 'something went wrong' }) : res.json({ ok: true, succ });
	});
};

module.exports = { register, login, deleteaccount, verify_token };
