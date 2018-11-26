const users = [
  {
    id: '1',
    name: 'Thomas',
    email: 'thomas@home.com',
    age: 29,
  },
  {
    id: '2',
    name: 'Penny',
    email: 'penny@home.com',
  },
  {
    id: '3',
    name: 'Rachel',
    email: 'rachel@home.com',
    age: 25,
  },
];

// Demo post data
const posts = [
  {
    id: '4',
    title: 'Post 1',
    body: 'the most amazing post ever',
    published: true,
    author: '1',
  },
  {
    id: '5',
    title: 'new post',
    body: 'second post - the real bestest!',
    published: true,
    author: '1',
  },
  {
    id: '6',
    title: 'in progress',
    body: 'soon, my pretties, soon',
    published: false,
    author: '2',
  },
];

// Demo comment data
const comments = [
  {
    id: '7',
    text: 'first!1!!!11!',
    post: '5',
    author: '1',
  },
  {
    id: '8',
    text: 'how mature!',
    post: '5',
    author: '2',
  },
  {
    id: '9',
    text: "y'all are crazy!",
    post: '6',
    author: '3',
  },
  {
    id: '10 ',
    text: 'the best for last',
    post: '4',
    author: '1',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
