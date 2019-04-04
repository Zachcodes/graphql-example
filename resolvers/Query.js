// There are 4 arguments passed to each resolver function 
// Parent is the previous object. Since there is no previous object on any of these entry fields, we don't need it 
// info won't be covered here
function getUsers(parent, args, context, info) {
    // console.log('context in getUsers \n', context)
    return context.prisma.users()
}

// args is the arguments provided to the field. Since the getUser field in the schema file expects an id, we will be passed an object with args.id
// context is provided to every resolver function and each resolver function in the chain can write to it.
function getUser(parent, args, context, info) {
    // console.log('args in getUser \n', args)
    let { id, hobbyLim, postLim } = args;
    if(!context.queryArgs) context.queryArgs = { hobbyLim, postLim }
    let user = context.prisma.user({ id })
    // console.log('user in getUser', user)
    return user
}


function hobby(parent, args, context, info) {
    let { id } = args;
    // Prisma generates a number of methods per type defined in the datamodel.prisma
    // lower case hobby corresponds with the Hobby type in the datamodel.prisma and lets us query for a single record of that type
    // we can fetch lists using the plural form
    return context.prisma.hobby({ id })
}

// type Query {
//     getUsers: [User!]!
//     getUser(id: ID!, hobbyLim: Int, postLim: Int): User
//     hobby(id: ID!): Hobby
//   }

module.exports = {
    getUsers,
    getUser,
    hobby
}