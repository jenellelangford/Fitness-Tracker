const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/""
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(workout => {
    res.json(workout);
  })
});

// POST
app.post("/api/workouts", (req, res) => {
  db.Workout.create({type: "workout"})
  res.json(resp);
})

// UPDATE
/*update (exercises => {
  db.Workout.findWorkout(workoutId, {exercises: exercises}, (err, doc) => {

  })

})
*/
// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseCntrl.getAll);

// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

