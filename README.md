# GraphQL

A project to experiment with the basics of GraphQL using Prisma and Apollo.

Building a message/comment database.

One of the benefits of GraphQL is that queries return exactly what you need - no more over or under fetching.

GraphQL is strongly typed. Once the schema is set, the teams on the frontend and backend know exactly what they'll be working with. Because it is strongly typed, using `enum` for strings, like MutationType, is recommended - will find typos, etc.

Prisma is an ORM and wraps the database to expose it as a single endpoint API. This makes the server itself less complicated; it only needs to take care of authentication and authorization.
