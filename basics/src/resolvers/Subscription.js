const Subscription = {
  comment: {
    // destructuring id from args, db & pubsub from ctx
    subscribe(parnet, { postId }, { db, pubsub }, info) {
      // does post exist?
      const post = db.posts.find(post => post.id === postId && post.published);
      if (!post) throw new Error('Post not found!');

      return pubsub.asyncIterator(`comment ${postId}`);
    },
  },
  post: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator(`post`);
    },
  },
};

export { Subscription as default };
