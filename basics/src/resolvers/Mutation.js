import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const { email } = args.data;
    const emailTaken = db.users.some(user => user.email === email);
    if (emailTaken) throw new Error('This email is aleady taken.');
    const user = {
      id: uuidv4(),
      ...args.data,
    };
    db.users.push(user);

    return user;
  },
  deleteUser(parent, args, { db }, info) {
    // get the index of the user to delete
    const userIndex = db.users.findIndex(user => user.id === args.id);
    if (userIndex === -1) throw new Error('User not found');
    // the removed user is returned with splice
    const deletedUsers = db.users.splice(userIndex, 1);
    // get rid of that user's posts
    db.posts = db.posts.filter(post => {
      const match = post.author === args.id;
      if (match) {
        db.comments = db.comments.filter(comment => comment.post !== post.id);
      }

      return !match;
    });
    // get rid of that user's comments
    comments = comments.filter(comment => comment.author !== args.id);

    return deletedUsers[0];
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.users.find(user => user.id === id);

    if (!user) throw new Error('User not found');
    if (typeof data.email === 'string') {
      const emailTaken = db.users.some(user => user.email === data.email);
      if (emailTaken) throw new Error('Email already in user');
      user.email = data.email;
    }
    if (typeof data.name === 'string') user.name = data.name;
    if (typeof data.age !== 'undefined') user.age = data.aga;

    return user;
  },
  createPost(parent, args, { db }, info) {
    const { author } = args.data;
    const userExists = db.users.some(user => user.id === author);
    if (!userExists) throw new Error('User not found');
    const post = {
      id: uuidv4(),
      ...args.data,
    };
    db.posts.push(post);

    return post;
  },
  deletePost(parent, args, { db }, info) {
    // get the index of the post
    const postIndex = db.posts.findIndex(post => post.id === args.id);
    if (postIndex === -1) throw new Error('Post not found');
    // the removed post is returned from splice
    const deletedPosts = db.posts.splice(postIndex, 1);
    // get rid of the post's comments
    db.comments = db.comments.filter(comment => comment.post !== args.id);

    return deletedPosts[0];
  },
  updatePost(parent, args, { db }, info) {
    const { id, data } = args;
    const post = db.posts.find(post => post.id === id);

    if (!post) throw new Error('Post not found');
    if (typeof data.title === 'string') post.title = data.title;
    if (typeof data.body === 'string') post.body = data.body;
    if (typeof data.published === 'boolean') post.published = data.published;

    return post;
  },
  createComment(parent, args, { db }, info) {
    const { author, post } = args.data;
    const postExists = db.posts.some(
      aPost => aPost.id === post && aPost.published,
    );
    if (!postExists) throw new Error('Post not found');
    const userExists = db.users.some(user => user.id === author);
    if (!userExists) throw new Error('User not found');
    const comment = {
      id: uuidv4(),
      ...args.data,
    };
    db.comments.push(comment);

    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    // get index of comment
    const commentIndex = db.comments.findIndex(
      comment => comment.id === args.id,
    );
    if (commentIndex === -1) throw new Error('Comment not found');
    // delete the comment
    const deletedComment = db.comments.splice(commentIndex, 1);

    return deletedComment[0];
  },
};

export { Mutation as default };
