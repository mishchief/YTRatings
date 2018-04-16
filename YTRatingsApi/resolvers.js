export default {
    Query: {
        allYouTubers: async (parent, args, {YouTuber}) => {
            const youtubers = await YouTuber.find();
            if (!youtubers) {
                throw new Error('Error')
            }
            return youtubers;
        },
        allCategories: async (parent, args, {Categories}) => {
            const categories = await Categories.find();
            if (!categories) {
                throw new Error('Error')
            }
            return categories;
        },
        allReviews: async (parent, args, {Review}) => {
            const reviews = await Review.find();
            if (!reviews) {
                throw new Error('Error')
            }
            return reviews;
        },
        youtuber: async (parent, args, {YouTuber}) => {
            const youtuber = await YouTuber.findOne(args);
            if (!youtuber) {
                throw new Error('No YouTuber with such name')
            }
            return youtuber;
        },
        // (name: String!, youtuberName: String)
        category: async (parent, args, {Categories}) => {
            let category = await Categories.findOne(args);
            if (!category) {
                throw new Error('No Category with such name')
            }
            return category;
        },
        // title: String!, youtuberName: String!, category: String
        review: async (parent, args, {Review}) => {
            let review = await Review.findOne(args);
            if (!review) {
                throw new Error('No review with such name')
            }
            return review;
        }

    },
    Mutation: {
        addYoutuber: async (parent, args, {YouTuber}) => {
            const dupYT = await YouTuber.findOne({name: args.name});
            if (args.name === '' || dupYT) {
                throw new Error('Duplicate or missing name parameter')
            }
            const youtuber = new YouTuber({
                name: args.name,
                uri: args.uri,
                img: args.img
            });
            return await youtuber.save()
        },
        addCategory: async (parent, args, {Categories}) => {
            const dupCat = await Categories.findOne({name: args.name});
            if (args.name === '' || args.youtuberName === '' || dupCat) {
                throw new Error('Duplicate or missing name parameter')
            }
            const category = new Categories({
                name: args.name,
                youtuberName: args.youtuberName
            });
            return await category.save()
        },
        addReview: async (parent, args, {Review, Categories}) => {
            const dupRev = await Review.findOne({
                title: args.title,
                youtuberName: args.youtuberName,
                category: args.category
            });
            if (args.title === '' || args.youtuberName === '' || args.category === '' || args.rating === '' || dupRev) {
                throw new Error('Duplicate or missing name parameter')
            }
            const review = new Review({
                title: args.title,
                category: args.category,
                youtuberName: args.youtuberName,
                rating: args.rating,
                salesURI: args.salesURI,
                img: args.img
            });
            const newCat = await Categories.findOne({name: args.category});
            if (newCat === null) {
                const category = new Categories({
                    name: args.category,
                    youtuberName: args.youtuberName
                });
                await category.save()
            }
            return await review.save()
        },
        // editYoutuber(name: String!, uri: String, img: String): YouTuber!
        editYoutuber: async (parent, args, {YouTuber}) => {
            if(Object.keys(args).length === 1) {
                throw new Error('No Changes were requested')
            }
            await YouTuber.findOneAndUpdate({name: args.name}, args);
            return await YouTuber.findOne({name: args.name})
        },
        // editCategory(name: String!, youtuberName: String!): Category!
        editCategory: async (parent, args, {Categories}) => {
            if(Object.keys(args).length === 1) {
                throw new Error('No Changes were requested')
            }
            await Categories.findByIdAndUpdate({_id: args._id}, args);

            return await Categories.findOne({_id: args._id})
        },
        // editReview(_id: String!, title: String, category: String!, youtuberName: String!, rating: String!, salesURI: String, img: String): Review!
        editReview: async (parent, args, {Review}) => {
            if(Object.keys(args).length === 1) {
                throw new Error('No Changes were requested')
            }
            await Review.findByIdAndUpdate({_id: args._id}, args);

            return await Review.findOne({_id: args._id})
        },
    },
    YouTuber: {
        categories: async (parent, args, {Categories}) => {
            return await Categories.find({youtuberName: parent.name})
        },
        reviews: async (parent, args, {Review}) => {
            return await Review.find({youtuberName: parent.name})
        }
    },
    Category: {
        reviews: async (parent, args, {Review}) => {
            return await Review.find({youtuberName: parent.youtuberName, category: parent.name})
        },
        youtuber: async (parent, args, {YouTuber}) => {
            return await YouTuber.find({name: parent.youtuberName})
        }
    }
}
