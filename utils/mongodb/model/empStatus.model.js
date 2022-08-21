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
      complete_task:{
        type: String,
        required:true,
      },
      pending_task:{
        type: String,
        required:true,
      },
      today_date:{
         type:String,
         default:1,
      }
},{ timestamps: true});

const _model = model("Employee_daily_status", schema);
module.exports = _model;
