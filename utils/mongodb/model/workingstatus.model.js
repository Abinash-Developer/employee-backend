const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
      start_time:{
        type: Number, 
        default: (new Date()).getTime(),
      },
      end_time:{
        type:Number,
        default:(new Date()).getTime(),
      },
      punch_date:{
         type:String,
         required: true
      },
      punch_status:{
        type:String,
        required:true,
      }
},{ timestamps: true});

const _model = model("PunchInStatus", schema);
module.exports = _model;
