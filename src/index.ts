import dotenv from "dotenv";
import app from "./app";
import server from "./server";

import cors from "cors";

import api from "../src/api";

dotenv.config();

const PORT = process.env.PORT || 5000;

// app.listen(port, () => {

//   console.log(`Server running on http://localhost:${port}`);
// });

(async () => {
  await server.start();

  app.use(cors());

  server.applyMiddleware({
    app,
    cors: {
      origin: "*",
    },
  });

  // app.use("/auth", auth);
  app.use("/", api);

  await new Promise((resolve) =>
    app.listen({ port: PORT }, () => {
      console.log(`
      Server running on port ${PORT}.
      GraphQL running on ${server.graphqlPath}.
      `);
      resolve;
    })
  );
})();
