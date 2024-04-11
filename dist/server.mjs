import {
  registerForEvent
} from "./chunk-7YCRX6GW.mjs";
import {
  checkIn
} from "./chunk-HZ4KTMD4.mjs";
import {
  createEvent
} from "./chunk-4BP6XIFS.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-VR57XXWV.mjs";
import {
  getEventAttendees
} from "./chunk-25RLJ36Q.mjs";
import {
  getEvent
} from "./chunk-EGCYGJ6T.mjs";
import "./chunk-A42IFF2V.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifySwagger, {
  swagger: {
    consumes: ["aplication/json"],
    produces: ["aplication/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xF5es da Api",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.register(fastifyCors, { origin: "*" });
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server runing!");
});
