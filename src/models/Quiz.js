import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId:{type:String, required},
    referencePay: { type: String, default:""},
    
 
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
