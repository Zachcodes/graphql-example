function postedBy(parent, args, context) {
    // console.log('parent in post \n', parent)
    // console.log('context query args in postedBY', context.queryArgs)
    return context.prisma.post({id: parent.id}).postedBy()
}

module.exports = {
    postedBy
}