const express = require('express');
const router = express.Router();
const { getDb } = require('../config/dbConnect');
const { getAllPackageCtlr, getSinglePackageCtlr, createPackageCtlr } = require('../controller/packageController');
const ObjectId = require('mongodb').ObjectId;

// Get all Package Collection API
router.get('/', getAllPackageCtlr);

// Get a Single Package API by id
router.get('/:id', getSinglePackageCtlr);

// Add new Package API Post 
router.post('/', createPackageCtlr);

module.exports = router;