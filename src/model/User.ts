import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date
}

const MessageSchema: Schema <Message>= new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        required: true,
        default: Date.now
    }

})

export interface User extends Document{
    username: string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    message: Message[]
}


const UserSchema: Schema <User>= new Schema({
    username:{
        type: String,
        required: [true, "Username jaruri hai"],
        trim: true, 
        unique: true
    },
    email:{
        type: String,
        required: [true, "Email jaruri hai"],
        trim: true, 
        unique: true,
        match:[/.+\@.+\..+/, 'please use a valid email address']
    },
    password:{
        type: String,
        required: [true, "Password jaruri hai"],
        trim: true
    },
    verifyCode:{
        type:String,
        required: true,
    },
    verifyCodeExpiry:{
        type:Date
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    message: [MessageSchema]

});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;
