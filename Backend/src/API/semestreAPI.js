//REQUIREMENTS
const express = require("express");
const router = express.Router();
const semestreCRUDService = require("../services/semestreCRUDService");

//GET ALL SEMESTERS
router.get("/", async (req, res) => {
  console.log("GET request received for all semesters");
  const response = await semestreCRUDService.getAll();
  res.json({
    method: "getAll",
    code: response.code,
    result: response.result,
    message: response.message
  });
});

// GET SEMESTER BY ID
router.get("/:id", async (req, res) => {
  console.log(`GET request received for getting semester by ID: '${req.params.id}'`);
  const response = await semestreCRUDService.getById(req.params.id);
  res.json({
    method: "getById",
    code: response.code,
    result: response.result,
    message: response.message
  });
});

//CREATE SEMESTER
router.post("/", async (req, res) => {
  console.log(`POST request received for creating a new semester with code: ${req.body.codigosemestre}`);
  const response = await semestreCRUDService.create(req.body.codigosemestre);
  res.json({
    method: "create",
    code: response.code,
    result: response.result,
    message: response.message
  });
});

//UPDATE A REGISTERED SEMESTER
router.put("/:id", async (req, res) => {
  console.log(`PUT request received for updating the semester with ID: '${req.params.id}', code: '${req.body.codigosemestre}'`);
  const response = await semestreCRUDService.update(
    req.params.id,
    req.body.codigosemestre
  );
  res.json({
    method: "update",
    code: response.code,
    result: response.result,
    message: response.message
  });
});

//DELETE A REGISTERED SEMESTER
router.delete("/:id", async (req, res) => {
  console.log(`DELETE request received for deleting the semester with ID: '${req.params.id}'`);
  const response = await semestreCRUDService.remove(req.params.id);
  res.json({
    method: "remove",
    code: response.code,
    result: response.result,
    message: response.message
  });
});

module.exports = router;