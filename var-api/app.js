const OpenAPIBackend = require("openapi-backend").default;
const express = require("express");
const app = express();
app.use(express.json());
app.use(require("cors")());

// create api with definition file
const api = new OpenAPIBackend({ definition: "./api-definition/index.yml" });

// register request handlers
const sampleNotFoundError = {err: "sample not found"};
api.register({
  // assets
  getAssets: async (c, req, res) => res.status(200).json(c.operation?.responses?.["200"]?.content?.["application/json"]?.schema?.example || sampleNotFoundError),

  // base handlers
  validationFail: async (c, req, res) => res.status(400).json({ err: c.validation.errors }),
  notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
});

// initalize the backend
api.init();

// use as express middleware
app.use((req, res) => api.handleRequest(req, req, res));

// start server
app.listen(9000, () => console.info("api listening at http://localhost:9000"));
