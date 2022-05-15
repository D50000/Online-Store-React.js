import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from "./addToCart";
import checkout from "./checkout";

// Make a fake graphql tagged template for code color.
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
    }
  `,

  resolvers: {
    Mutation: {
      addToCart,
      checkout,
    },
  },
});
