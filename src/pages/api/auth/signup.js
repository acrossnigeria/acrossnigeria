import User from "@/models/User";
import db from "../../../../utils/db";
import bcryptjs from 'bcryptjs'

async function handler(req, res) {
  console.log(req.body)
       if (req.method !== 'POST') {
      return;
    }
    const {name,surname, email, phone, 
      state, age, gender, password, refInfo} = req.body;
   const slug=name+surname+state+age;
    if (
      !name ||
      !email||
      !phone||
      !state||
      !email.includes('@') ||
      !password ||
      !refInfo||
      password.trim().length < 8||age<18
    ) {   
      res.status(422).json({
        message: 'Validation error',
      });
      console.log("validation problem")
      return;
    }
  
  await db.connect();
     const existingUser = await User.findOne({ email: email }).maxTimeMS(20000);
    if (existingUser ) {
      console.log("user exists")
      res.status(422).json({ message: 'User exists already!' });
      await db.disconnect();
      return;
    }
   if(refInfo!=="" ){
   const referencePay=refInfo;
   const regPayment= true

   }
    const newUser = new User({
      name,
       surname, email, slug, phone, state, age, gender,
      password: bcryptjs.hashSync(password),referencePay, regPayment,
      isAdmin: false,
    });  
     console.log("Progress");
    const user = await newUser.save();
    await db.disconnect();
    console.log("Success");
    res.status(201).send({
      message: `Congratulations ${user.name}!`,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
  
  export default handler;