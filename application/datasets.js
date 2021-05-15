var db = require("../domain/models");

const dataSets = [
  {
    name: "IL Dual Credit Entities",
    key: "IL_DualCredit_Entities",
    model: "IL_DualCredit_Entity",
  },
];

function getDataSets() {
  return JSON.parse(JSON.stringify(dataSets));
}

async function get(key) {
  let dataset = dataSets.find((x) => x.key === key);

  if (dataset) return await db[dataset.model].findAll({ raw: true });
  else throw "Invalid dataset";
}

async function refresh(key, data) {
  let dataset = dataSets.find((x) => x.key === key);

  if (dataset) {
    await db[dataset.model].destroy({ truncate: true });
    await db[dataset.model].bulkCreate(data);
    return;
  } else throw "Invalid dataset";
}

module.exports = {
  getDataSets,
  get,
  refresh,
};
