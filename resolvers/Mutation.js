function post(parent, args, context) {

    return context.prisma.createPost({
        postText: args.postText,
        postedBy: { connect: { id: args.userId }}
    })
}

async function createUser(parent, args, context) {
    const user = await context.prisma.createUser({ ...args })
    return user;
}

async function createHobby(parent, args, context) {
    const { activity, userId } = args
    const hobby = await context.prisma.createHobby({
        activity,
        user: { connect: { id: userId }}
    })
    return hobby;
}

module.exports = {
    post,
    createUser,
    createHobby
}