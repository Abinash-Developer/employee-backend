const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
      title: {
        type: String,
        required: true,
      },    
      description:{
        type: String,
        required: true,
      },
      holiday_date:{
        type: String,
        required:true,
      }
},{ timestamps: true});

const _model = model("holiday", schema);
module.exports = _model;
