// import express from "express";
// import path from "path";
const express = require('express');
const path = require('path');

export const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
