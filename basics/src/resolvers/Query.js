const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) return db.users;
    return db.users.filter(user =>
      user.name.toLowerCase().includes(args.query.toLowerCase()),
    );
  },
  posts(parent, args, { db }, info) {
    if (!args.query) return db.posts;
    return db.posts.filter(
      post =>
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase()),
    );
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
  me() {
    return {
      id: 'LJH$DS34',
      name: 'Thomas',
      email: 't@yo.dude',
      age: 28,
    };
  },
  post() {
    return {
      id: 'LJH$DS34',
      title: 'Best post Evah!',
      body: 'this is soo amaaahhhhzing, yo!',
      published: true,
    };
  },
};

export { Query as default };
