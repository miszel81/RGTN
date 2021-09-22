import { Query } from "type-graphql";


export class HelloResolvers {
    @Query(() => String)
    hello() {
        return 'bye'
    }
}