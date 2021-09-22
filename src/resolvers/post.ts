import { Post } from "../entites/Post";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Query } from "type-graphql";

export class PostResolvers {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext) {
    return em.find(Post, {});
  }

  @Query(() => [Post])
  post(
    @Arg('id', () => Int) id: number,  
    @Ctx() { em }: MyContext) {
    return em.findOne(Post, {id});
  }
}
