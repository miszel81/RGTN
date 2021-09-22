import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entites/Post";
import mikroOrmConfig from "./mikro-orm.config";
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import { HelloResolvers } from "./resolvers/hello";
import { PostResolvers } from "./resolvers/post";

const main = async () => {
  //conect to db
  const orm = await MikroORM.init(mikroOrmConfig);
  //run migrations
  await orm.getMigrator().up()

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolvers, PostResolvers],
      validate: false
    }), 
    context: () => ({em: orm.em})
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({app})
  
  app.listen(4000, () => {
    console.log('listening on port: 4000')
  })
  
  //run sql
  // const post = orm.em.create(Post, {title: 'first post'})
  // await orm.em.persistAndFlush(post)

  // const posts = await orm.em.find(Post, {})
  // console.log(posts)
};

main();
