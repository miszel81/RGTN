import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default  {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: "liredit",
    password: 'miszel81',
    type: "postgresql",
    debug: !__prod__
  } as Parameters<typeof MikroORM.init>[0]; // --> Parameters returns arrays do we need [0]
 