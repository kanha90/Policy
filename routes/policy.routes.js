const express = require("express");
const policyControllers = require("../controller/policy.controller");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(policyControllers.getAllPolicy)
  .post(policyControllers.addNewPolicy);

router.route("/:id").get(policyControllers.getPolicyById);
router.route("/customer/:id").get(policyControllers.getPolicyByCId);
router.route("/customers/:id").get(policyControllers.getAllPolicyByCustomerId);
router.route("/:id").patch(policyControllers.getPolicyByIdAndUpdate);

module.exports = router;
