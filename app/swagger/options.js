const optionsSwagger = {
  info: {
    version : '1.0.0',
    title: 'Quiz\'O\'Tron API',
    description: "Détails de l'API de Quiz'O'Tron",
  },
  security: {
    BasicAuth : {
      type: "http",
      scheme : "basic"
    },
    BearerAuth: {
      type : "http",
      scheme: "bearer",
    },
  },
  server:
    {
      url: 'http://localhost:3000',
      description: process.env.SWAGGER_SERVER_DESC || 'Local server',
    },
  filesPattern: '../**/*.js',
  // Base directory which we use to locate your JSDOC files
  baseDir: __dirname,
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '*',
  notRequiredAsNullable: false,
};

module.exports = optionsSwagger;