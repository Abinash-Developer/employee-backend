const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
      start_time:{
        type: String, 
        required:true,
      },
      end_time:{
        type:String,
        required:true,
      },
      punch_date:{
         type:String,
         required: true
      },
      punch_status:{
        type:String,
        required:true,
      },
      work_status:{
        type:String,
        required:true,
      },
      latitude:{
        type:String,
        required:true,
      },
      longitude:{
        type:String,
        required:true,
      }
},{ timestamps: true});

const _model = model("PunchInStatus", schema);
module.exports = _model;
