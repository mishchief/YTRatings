import mongoose from  'mongoose';
let Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: String,
    category: String,
    youtuberName: String,
    rating: String,
    salesURI: String,
    img: String
}, {
    timestamps: true
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
