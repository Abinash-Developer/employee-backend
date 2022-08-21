const { Schema, model } = require("mongoose");
const { encryptText } = require("../../helper/bcryptText");

const schema = new Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        default: 2,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_active:{
        type:Boolean,
        default:true
    },
    online:
    {
      type: Boolean,
      default:true
    },
    is_delete:{
        type:Boolean,
        default:false
    }

},{ timestamps: true});


schema.pre("save", async function (next) {
    const data = this;

    if (this.isModified("password") || this.isNew) {
        let pw = await encryptText(data.password);
        data.password = pw;
        next();
    } else {
        return next();
    }
});

const _model = model("users", schema);
module.exports = _model;
