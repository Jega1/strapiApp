// 'use strict';

// /**
//  * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
//  * to customize this controller
//  */

// module.exports = {};

"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findByAuthor(ctx) {
    let entities;

    console.log("ctx", ctx);
    return "Jega fais qqc";
    // if (ctx.query._q) {
    //   entities = await strapi.services.book.search(ctx.query);
    // } else {
    //   entities = await strapi.services.book.find(ctx.query);
    // }

    // return entities.map((entity) =>
    //   sanitizeEntity(entity, { model: strapi.models.book })
    // );
  },
};

("use strict");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findByAuthor(ctx) {
    let entities;

    entities = await strapi.services.book.findByAuthor(ctx.params.author);

    return ctx.send("bonj");
  },
};
