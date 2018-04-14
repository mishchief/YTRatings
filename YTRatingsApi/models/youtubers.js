import mongoose from  'mongoose';
let Schema = mongoose.Schema;

const YouTuberSchema = new Schema({
    name: String,
    uri: String,
    img: String
},{
    timestamps: true
});

const YouTuber = mongoose.model('YouTuber', YouTuberSchema);

export default YouTuber;
