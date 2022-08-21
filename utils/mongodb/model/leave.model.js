const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
      title: {
        type: String,
        required: true,
      },
      start_date:{
        type: String,
        required:true,
      },
      end_date:{
        type: String,
        required:true,
      },
      leave_status:{
         type:String,
         default:1,
      }
},{ timestamps: true});

const _model = model("EmployeeLeave", schema);
module.exports = _model;
