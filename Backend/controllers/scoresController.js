const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const fs = require('fs');

exports.saveNewScore = catchAsyncErrors(async (req, res, next) => {
 

    res.status(201).json({
        success: true,
        message: "Score Added Successfully",
        score
      });
    });

exports.getAllScores = catchAsyncErrors(async (req, res, next) => {

    fs.readFile('./Backend/controllers/pengci_jobs.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading scores file', err);
          res.status(500).send('Error reading data.dat');
        }         
          const scores = JSON.parse(data);
          console.log(scores)
          res.status(200).json({
            success: true,
            scores     
      })
        
      });
    });
      