const resourceRouter = require("express").Router();

const {
  getResources,
  getResourcesQA,
  getResourcesBack,
  getResourcesFront,
  getResourcesAll,
} = require("../controllers/resources.controller");

resourceRouter.get("/resources/all", getResourcesAll);
resourceRouter.get("/resources/front-end", getResourcesFront);
resourceRouter.get("/resources/back-end", getResourcesBack);
resourceRouter.get("/resources/qa", getResourcesQA);
resourceRouter.get("/resources", getResources);

module.exports = {
  resourceRouter,
};
