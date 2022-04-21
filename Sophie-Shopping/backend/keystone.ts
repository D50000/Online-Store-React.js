import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/Sophie-Shopping";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // session period
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
  },
  lists: createSchema({
    // Schema items input
  }),
  ui: {
    // TODO: Changes this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});
