const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/"
router.get("/", (req, res) => {
  exerciseModel.findById(req.params.id), function (err, foundExercise) {
    if(err) {
      res.redirect("/index")
    } else {
      res.render(("/exerciseCntrl", {ExerciseCntrl: foundExercise}));
    }
  }
});

// UPDATE
router.put("/", (req, res) => {
  const data = {workout_name: req.body.name };
  function updateWorkout ( err, updateWorkout ) {
    if (err)
    res.redirect("/index");
  }
    else {
    res.redirect("/index" + req.params.id)
  }
  exerciseModel.findByIdAndUpdate(req.params.id,)
});


// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseCntrl.getAll);

// -- ADD ADDITIONAL ROUTES -- //
router.get("/", aboutCntrl.getAll);

router.get("/", index.getAll);

module.exports = router

