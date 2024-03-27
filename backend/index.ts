import { createServer } from "@triplit/server";
import { schema } from "../frontend/src/schema";

process.env.EXTERNAL_JWT_SECRET = "secret";
process.env.PROJECT_ID = "crvif";

createServer({
  storage: "memory",
  dbOptions: {
    schema: { collections: schema, version: 0 },
  },
})(3000);
