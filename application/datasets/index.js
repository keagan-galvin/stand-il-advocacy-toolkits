const { request } = require("express");
var db = require("../../domain/models");

const dataSets = [require("./il-dualcredit-entity.js")];

function getAll() {
  return JSON.parse(JSON.stringify(dataSets));
}

function get(key) {
  return dataSets.find((x) => x.key === key);
}

async function getData(key, config) {
  let dataset = get(key);

  if (dataset) {
    let results = await db[dataset.model].findAll({ raw: true });

    if (config.resultType && dataset.resultType[config.resultType]) {
      return dataset.resultType[config.resultType](results, config);
    } else return results;
  } else throw "Invalid dataset";
}

async function refresh(key, data) {
  let dataset = get(key);

  if (dataset) {
    await db[dataset.model].destroy({ truncate: true });
    await db[dataset.model].bulkCreate(data);
    return;
  } else throw "Invalid dataset";
}

module.exports = {
  get,
  getAll,
  getData,
  refresh,
};
