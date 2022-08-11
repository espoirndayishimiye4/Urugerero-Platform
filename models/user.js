const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
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
    },
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
      default: "user",
    },
    status: {
      type: Boolean,
      default: false,
    },
    dateTime: {
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
