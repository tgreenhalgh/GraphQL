const Comment = {
  author(parent, args, { db }, info) {
    return db.users.find(user => user.id === parent.author);
  },
  postID(parent, args, { db }, info) {
    return db.posts.find(post => post.id === parent.postID);
  },
};

export { Comment as default };
