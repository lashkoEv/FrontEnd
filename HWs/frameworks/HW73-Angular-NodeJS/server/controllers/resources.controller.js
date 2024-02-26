const { resourcesModel } = require("../models/resources.model");

function getResources(req, res) {
  return res.json(resourcesModel);
}

function getResourcesAll(req, res) {
  return res.json(resourcesModel.filter((r) => r.for === "all"));
}

function getResourcesFront(req, res) {
  return res.json(resourcesModel.filter((r) => r.for === "front-end"));
}

function getResourcesBack(req, res) {
  return res.json(resourcesModel.filter((r) => r.for === "back-end"));
}

function getResourcesQA(req, res) {
  return res.json(resourcesModel.filter((r) => r.for === "qa"));
}

module.exports = {
  getResources,
  getResourcesAll,
  getResourcesFront,
  getResourcesBack,
  getResourcesQA,
};
