import User from "@/models/User";
import db from "../../../../utils/db";
import bcryptjs from 'bcryptjs'

async function handler(req, res) {
  console.log(req.body)
       if (req.method !== 'POST') {
      return;
    }
    const detail = req.body;
  const{ name,surname,email,phone,residence,dob,gender,password,
  refInfo, refCode, referee}=detail;
  const slug=name+surname+residence;
    if (!name||!email||!phone||!residence||!email.includes('@') ||!password ||
      !refInfo||password.trim().length < 6) {   
      res.status(422).json({
        message: 'Validation error',
      });
      console.log("validation problem")
      return;
    }
 await db.connect();
     const existingUser = await User.findOne({ email: email}).maxTimeMS(20000);
    console.log("progress one")
     if (existingUser ) {
      console.log("user exists")
      res.status(422).json({ message: 'User exists already!' });
      await db.disconnect();
      return;}
   if(refInfo===""){
     res.status(422).json({
        message: 'Error-No Payment Information',
      });
      console.log("Error-No Payment Information")
      return;
     }
      const referencePay=refInfo;
   const regPayment= true
    const newUser = new User({
      name,
       surname, email, slug, phone, residence, dob, gender,
      password: bcryptjs.hashSync(password),referencePay, regPayment, refCode,
      isAdmin: false,
    });  
     console.log("Progress");
     if(!referee==='undefined'){
      const user = await newUser.save();
    const checkRef=await User.find({refCode:referee});
    console.log("Success");
    res.status(201).send({
      message: `Congratulations ${user.name}!`,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
     const refs= checkRef[0].references;
    const references= refs+1;
    checkRef.references=references;
    await checkRef.save();
    await db.disconnect();
    console.log("Success: Referee Updated");
    res.status(201).send({
      message: `Congratulations ${user.name}!`,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
   console.log("Success");
    res.status(201).send({
      message: `Congratulations ${newUser.name}!`,
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
    }
  
  export default handler;