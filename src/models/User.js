import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:{type: Number, required: true },
    residence:{type: String, required: true },
    password: { type: String, required: true },
    gender:{type:String, required:true},
    referencePay: { type: String, required: true, default:""},
    regPayment:{type:Boolean,required:true, default:false},
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
