const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new mongoose.Schema({
participants:[

    {
        type:Schema.Types.ObjectId,
        ref:"User"
    }
],
messages:
[
    {
        type:Schema.Types.ObjectId,
        ref:"Message"
    }
]
});
mongoose.models = {}
module.exports = mongoose.model("Conversation", conversationSchema);
