var db = require("../domain/models");

function getByEmail(email) {
    return db.User.findOne({where: { email }});
}

async function upsert(data) {
    console.log(data);
    var user = await getByEmail(data.email);

    if (user) {
        await user.update(data);
    } else {
       user = await db.User.create(data);
    }

    return user;
}

module.exports = { getByEmail, upsert };
