const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./mock.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

router.post("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./mock.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      const parsedData = JSON.parse(data);
      const entityId = req.body.EntityID;
      const subjectIds = req.body.SubjectsID;

      if (!parsedData) {
        res.status(400).json({ message: "Data not found" });
        return;
      }

      const subjectAlerts = {};

      parsedData.forEach((item) => {
        if (subjectIds.includes(item.SubjectId) && item.EntityID === entityId) {
          subjectAlerts[item.SubjectId] = item.isAlert;
        }
      });

      res.status(200).json(subjectAlerts);
    }
    
  });
});

module.exports = router;
