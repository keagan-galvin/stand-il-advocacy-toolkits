var db = require("../domain/models");

async function getAll() {
  return await db.User.findAll().toJSON();
}

async function getByEmail(email) {
  var result = await db.User.findOne({
    where: {
      email,
    },
  });
  return result ? result.toJSON() : null;
}

async function upsert(data) {
  var user = await getByEmail(data.email);

  if (user) {
    await user.update(data);
  } else {
    user = await db.User.create(data);
  }

  return user.toJSON();
}

module.exports = {
  getAll,
  getByEmail,
  upsert,
};
