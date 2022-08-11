const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "please provide first Name"],
    },
    lastName: {
      type: String,
      required: [true, "please provide last Name"],
    },
    email: {
      type: String,
      required: [true, "please provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minlength:6,
      select: false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    phone: {
      type: String,
      required: [true, "please provide phone"],
    },
    sector: {
      type: String,
      required: [true, "please provide sector"],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});
userSchema.methods.getSignedJWTToken = function(){
  return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
  })
}

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre("remove", async function (next) {
  await this.model("post").deleteMany({ user: this.id });
  next();
});
userSchema.virtual("posts", {
  ref: "post",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});
const user = mongoose.model("user", userSchema);

module.exports = user;
