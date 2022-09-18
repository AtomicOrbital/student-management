import mongoose from "mongoose";
const Schema = mongoose.Schema;
const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
//export collection name 'student' storing student info
const Class = mongoose.model("class", classSchema);
export default Class;