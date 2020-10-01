export const typeDefs = ["type MyType {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHello: MyType!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHello: MyType;
}

export interface MyType {
  text: string;
  error: boolean;
}
