const express = require("express");
const router = express.Router();
const historicoUsuarioService = require("../services/historicoUsuarioService");

router.get("/", async (req, res) => {
  console.log("GET request received to get all users history.");
  const response = await historicoUsuarioService.getAllUserHistory();
  res.json({
    method: "GetAllUserHistory",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

router.get("/:id", async (req, res) => {
  console.log(
    `GET request received to get a user history by ID: '${req.params.id}'.`
  );
  const response = await historicoUsuarioService.getUserHistoryById(
    req.params.id
  );
  res.json({
    method: "GetUserHistoryById",
    code: response.code,
    result: response.result,
    message: response.message,
  });
});

module.exports = router;
