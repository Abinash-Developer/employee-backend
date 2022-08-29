const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    name:{
        type: String, 
        required: false
    },
      start_time:{
        type: String, 
        required: false
      },
      end_time:{
        type:String,
        required: false
      },
      punch_date:{
         type:String,
         required: false
      },
      punch_status:{
        type:String,
        required: false
      },
      work_status:{
        type:String,
        required: false
      }
},{ timestamps: true});

const _model = model("attendance", schema);
module.exports = _model;