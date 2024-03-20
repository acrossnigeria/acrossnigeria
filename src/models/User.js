import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    surname:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:{type: Number, required: true },
    residence:{type: String, required: true },
    password: { type: String, required: true },
    gender:{type:String, required:true},
    dob:{type:String, required:false},
    referencePay: { type: String, default:""},
    regPayment:{type:Boolean, default:false},
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
