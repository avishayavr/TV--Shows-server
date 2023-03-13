const express = require("express");
const router = express.Router();

const {getAllData, getDataById, createShow, updateShow, deleteShow} = require("../controllers/showsController");

// get data function
router.get("/", getAllData);
router.get("/:id", getDataById);
router.post("/", createShow);
router.put("/:id", updateShow);
router.delete("/:id", deleteShow);

module.exports = router;
