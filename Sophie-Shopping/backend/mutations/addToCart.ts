import { KeystoneContext } from "@keystone-next/types";

import { CartItemCreateInput } from "../.keystone/schema-types";
import { Session } from "../types";

// Keystone api syntax with Graphql
async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log("ADDING TO CART MUTATION PROCESS!");
  // 1. Query the current user see if they are signed in
  const session = context.session as Session;
  if (!session.itemId) {
    throw new Error("You must be logged in to do this!");
  }

  // 2. Query the current users cart
  // 'findMany' keystone's syntax.
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: session.itemId }, product: { id: productId } },
    resolveFields: "id, quantity",
  });
  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );
    // 3. See if the current item is in their cart
    // 4. if itis, increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  // 4. if it isnt, create a new cart item!
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: session.itemId } },
    },
    resolveFields: false,
  });
}

export default addToCart;
