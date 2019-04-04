function posts(parent, args, context) {
    let { postLim } = context.queryArgs
    let filterObj = postLim ? {first: postLim} : {}
    return context.prisma.user({ id: parent.id }).posts(filterObj)
}

function hobbies(parent, args, context) {
    // console.log('parent in user hobbies', parent)
    let { hobbyLim } = context.queryArgs
    let filterObj = hobbyLim ? {first: hobbyLim} : {}
    return context.prisma.user({ id: parent.id }).hobbies(filterObj)
}

function name(parent, args, context) {
    // console.log('parent in name User', parent)
    return parent.name
}

// Notice that we have written only two resolver functions here for the posts nad hobbies fields.
// because id, name and email are all scalar values graphQl will automatically resolve these
// type User {
//     id: ID!
//     name: String!
//     email: String!
//     posts: [Post!]!
//     hobbies: [Hobby!]!
//   }

module.exports = {
    posts,
    hobbies,
    name
}