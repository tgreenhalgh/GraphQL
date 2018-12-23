const Subscription = {
  comment: {
    // destructuring id from args, db & pubsub from ctx
    subscribe(parnet, { postID }, { db, pubsub }, info) {
      // does post exist?
      const post = db.posts.find(post => post.id === postID && post.published);
      if (!post) throw new Error('Post not found!');

      return pubsub.asyncIterator(`comment ${postID}`);
    },
  },
  post: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator(`post`);
    },
  },
};

export { Subscription as default };
