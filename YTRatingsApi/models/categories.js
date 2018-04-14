import mongoose from  'mongoose';
let Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    name: String,
    youtuberName: String
}, {
    timestamps: true
});

const Categories = mongoose.model('Categorie', CategoriesSchema);

export default Categories;
