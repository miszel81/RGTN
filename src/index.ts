import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entites/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "liredit",
    type: "postgresql",
    debug: !__prod__
  });

  const post = orm.em.create(Post, {title: 'first post'})

};

main();
