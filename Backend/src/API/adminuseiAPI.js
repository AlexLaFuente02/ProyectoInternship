const express = require("express");
const router = express.Router();
const adminuseiService = require("../services/adminuseiService");

router.get("/", async (req, res) => {
  console.log("GET request received to get all USEI Administrators.");
  const response = await adminuseiService.getAllAdminsUSEI();
  res.json({
    method: "GetAllAdminsUSEI",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.get("/:id", async (req, res) => {
  console.log(
    `GET request received to get a USEI Administrator by ID: '${req.params.id}'.`
  );
  const response = await adminuseiService.getAdminUSEIById(req.params.id);
  res.json({
    method: "GetAdminUSEIById",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.post("/", async (req, res) => {
  console.log(
    `POST request received to create a new USEI Administrator with data: "${req.body}".`
  );
  const response = await adminuseiService.createAdminUSEI(req.body);
  res.json({
    method: "CreateAdminUSEI",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.put("/:id", async (req, res) => {
  console.log(
    `PUT request received to update the data of a USEI Administrator with ID: '${req.params.id}', with data: "${req.body}".`
  );
  const response = await adminuseiService.updateAdminUSEI(
    req.params.id,
    req.body
  );
  res.json({
    method: "UpdateAdminUSEI",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.delete("/:id", async (req, res) => {
  console.log(
    `DELETE request received to delete a USEI Administrator with ID: '${req.params.id}'.`
  );
  const response = await adminuseiService.deleteAdminUSEI(req.params.id);
  res.json({
    method: "DeleteAdminUSEI",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

module.exports = router;
