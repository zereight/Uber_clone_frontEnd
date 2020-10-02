import { MyType, SayHelloQueryArgs } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (_: any, args: SayHelloQueryArgs): MyType => {
      return {
        text: `${args.myText}`,
        error: false,
      };
    },
  },
};

export default resolvers;
