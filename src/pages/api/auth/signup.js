import User from "@/models/User";
import db from "../../../../utils/db";
import bcryptjs from 'bcryptjs'

async function handler(req, res) {
    if (req.method !== 'POST') {
      return;
    }
    const { name,
        surname,
        email,
        phone,
        residence,
        reference,
        password, } = req.body;
    if (
      !name ||
      !surname||
      !email||
      !phone||
      !residence||
      !reference||
      !email.includes('@') ||
      !password ||
      password.trim().length < 5
    ) {
      res.status(422).json({
        message: 'Validation error',
      });
      return;
    }
  
    await db.connect();
  
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(422).json({ message: 'User exists already!' });
      await db.disconnect();
      return;
    }
  
    const newUser = new User({
        name,
        surname,
        phone,
        residence,
        email,
      password: bcryptjs.hashSync(password),
      gender,
      isAdmin: false,
    });  
    const user = await newUser.save();
    await db.disconnect();
    res.status(201).send({
      message: `Congratulations ${user.name}!`,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
  
  export default handler;