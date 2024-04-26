import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
    content: {type: String, required: true},
    fileUrl: {type: String},
    sender: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    room: {type: Schema.Types.ObjectId, ref: 'Event', required: true},
    createdAt: {type: Date, default: Date.now()}
})

const Message = models.Message || model("Message", messageSchema)

export default Message