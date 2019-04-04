function user(parent, args, context) {
    return context.prisma.hobby({ id: parent.id }).user()
}

module.exports = {
    user
}