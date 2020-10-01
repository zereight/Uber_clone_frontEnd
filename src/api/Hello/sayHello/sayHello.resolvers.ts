import { MyType } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (): MyType => {
      return {
        text: "Hi",
        error: false,
      };
    },
  },
};

export default resolvers;
