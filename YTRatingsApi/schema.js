export default `
type Review {
    _id: String!
    title: String!
    category: String!
    youtuberName: String!
    rating: String! 
    salesURI: String
    img: String
}

type Category {
    _id: String!
    name: String
    youtuberName: String
    reviews: [Review]
}

type YouTuber {
    _id: String!
    name: String
    uri: String
    img: String
    categories: [Category]
}

type Query {
    allYouTubers: [YouTuber!]!
    allCategories: [Category!]!
    allReviews: [Review!]!
    youtuber(_id: String, name: String): YouTuber!
    category(name: String!, youtuberName: String): Category!
    review(_id: String, title: String, youtuberName: String, category: String ): Review!
}

type Mutation {
    addYoutuber(name: String!, uri: String, img: String): YouTuber!
    addCategory(name: String!, youtuberName: String!): Category!
    addReview(title: String!, category: String!, youtuberName: String!, rating: String!, salesURI: String, img: String): Review!
    
    editYoutuber(name: String!, uri: String, img: String): YouTuber!
    editCategory(_id: String!, name: String, youtuberName: String): Category!
    editReview(_id: String!, title: String, category: String, youtuberName: String, rating: String, salesURI: String, img: String): Review!
    
    deleteYoutuber(_id: String!): YouTuber!
    deleteCategory(_id: String!): Category!
    deleteReview(_id: String!): Review!
}
`;
