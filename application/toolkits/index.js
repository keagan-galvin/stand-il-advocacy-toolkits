const { request } = require("express");
var db = require("../../domain/models");
const { Op } = require("sequelize");

const toolkits = [require("./il-dualcredit-toolkits.js")];

function getAll() {
  return JSON.parse(JSON.stringify(toolkits));
}

function get(key) {
  return toolkits.find((x) => x.key === key);
}

async function getData(key) {
  let toolkit = get(key);

  if (toolkit) {
    let results = await db[toolkit.model].findAll({ raw: true });
    let users = await db.User.where({
      id: {
        [Op.in]: results.slice().map((x) => x.userId),
      },
    });

    return results.slice().map((x) => {
      let user = users.find((y) => y.id === x.userId);
      return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        zip: user.zip,
        email_optin: user.email_optin,
        ...x,
      };
    });
  } else throw "Invalid toolkit";
}

async function getByUserId(key, userId) {
  let toolkit = get(key);
  if (!toolkit) throw "Invalid toolkit";

  let result = await db[toolkit.model].findOne({
    where: {
      userId,
    },
  });

  return result ? result.toJSON() : null;
}

async function upsert(key, data) {
  let toolkit = get(key);
  if (!toolkit) throw "Invalid toolkit";

  var user = await db.User.findOne({
    where: {
      id: data.userId,
    },
  });

  if (!user) throw "Invalid user";

  let target = await db[toolkit.model].findOne({
    where: {
      userId: data.userId,
    },
  });

  if (target) {
    await target.update(data);
  } else {
    target = await db[toolkit.model].create(data);
  }

  return target.toJSON();
}

module.exports = {
  get,
  getAll,
  getData,
  getByUserId,
  upsert,
};
